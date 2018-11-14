import threading
import time
import subprocess

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