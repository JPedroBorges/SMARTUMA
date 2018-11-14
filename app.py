import sys
import subprocess
import os
import glob
import time
import datetime
import threading


"""os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')

base_dir = '/sys/bus/w1/devices/'
device_folder = glob.glob(base_dir + '28*')[0]
device_file = device_folder + '/w1_slave'

interface = "wlan0"""

class SignalTranslator(threading.Thread):

    def __init__(self):
        threading.Thread.__init__(self)

    def run(self):
        while True:
            """print("Wifi Signal: " + self.translate_signal(self.read_signal_raw()))"""
            print('signal')
            time.sleep(1)

    def read_signal_raw(self):
        proc = subprocess.Popen(["iwlist", interface, "scan"],stdout=subprocess.PIPE, universal_newlines=True)
        out, err = proc.communicate()
        
        value = int(out.split("\n")[4].split("Signal level=")[1].split(" ")[0])
        
        return value
        
    def translate_signal(self,value):
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

class TempReader(threading.Thread):

    def __init__(self):
          threading.Thread.__init__(self)

    def run(self):
        while True:
            """print("Temperature: " + str(self.read_temp()) + "ยบC")"""
            print('temp')
            time.sleep(1)       

    def read_temp_raw(self):
        f = open(device_file, 'r')
        lines = f.readlines()
        f.close()
        return lines
     
    def read_temp(self):
        lines = self.read_temp_raw()
        while lines[0].strip()[-3:] != 'YES':
            time.sleep(0.2)
            lines = self.read_temp_raw()
        equals_pos = lines[1].find('t=')
        if equals_pos != -1:
            temp_string = lines[1][equals_pos+2:]
            temp_c = float(temp_string) / 1000.0
            return temp_c       

class DeviceScanner(threading.Thread):

    def __init__(self):
          threading.Thread.__init__(self)

    def run(self):
        while True:
            print("device")
            time.sleep(1)                           
    
if __name__ == "__main__":
    """while True:
        print("[ " + datetime.datetime.utcnow().strftime('%d %B %Y - %H:%M:%S') + " ]")
        print("Wifi Signal: " + translate_signal(read_signal_raw()))
        print("Temperature: " + str(read_temp()) + "ยบC")
        print("-------------------------------")
        
        time.sleep(1)"""

    SignalTranslator().start()
    TempReader().start()
    DeviceScanner().start()
        
