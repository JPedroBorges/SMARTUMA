import sys
import subprocess
import os
import glob
import time
import datetime


os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')

base_dir = '/sys/bus/w1/devices/'
device_folder = glob.glob(base_dir + '28*')[0]
device_file = device_folder + '/w1_slave'

interface = "wlan0"

def read_temp_raw():
    f = open(device_file, 'r')
    lines = f.readlines()
    f.close()
    return lines
 
def read_temp():
    lines = read_temp_raw()
    while lines[0].strip()[-3:] != 'YES':
        time.sleep(0.2)
        lines = read_temp_raw()
    equals_pos = lines[1].find('t=')
    if equals_pos != -1:
        temp_string = lines[1][equals_pos+2:]
        temp_c = float(temp_string) / 1000.0
        return temp_c
		
def read_signal_raw():
	proc = subprocess.Popen(["iwlist", interface, "scan"],stdout=subprocess.PIPE, universal_newlines=True)
	out, err = proc.communicate()
	
	value = int(out.split("\n")[4].split("Signal level=")[1].split(" ")[0])
	
	return value
	
def translate_signal(value):
	status = ""
	if value > -30:
	   status = "Amazing"
	elif value > -67:
	   status = "Very Good"
	elif value > -70:
	   status = "Okay"
	elif value > -80:
	   status = "Not Good"
	elif value > -90:
	   status = "Unusable"
	else:
	   status = "Do you even have internet?"
	   
	return status
	


def main():
	while True:
		print("[ " + datetime.datetime.utcnow().strftime('%d %B %Y - %H:%M:%S') + " ]")
		print("Wifi Signal: " + translate_signal(read_signal_raw()))
		print("Temperature: " + str(read_temp()) + "ยบC")
		print("-------------------------------")
		
		time.sleep(1)
	
	

	
main()
