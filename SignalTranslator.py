import threading
import time
import subprocess
import random

sampling_rate = 60 * 5

class SignalTranslator(threading.Thread):

    def __init__(self):
        threading.Thread.__init__(self)

    def run(self):
        while True:
            print("Wifi Signal: " + self.translate_signal(self.read_signal_raw()))
            time.sleep(sampling_rate)

    def read_signal_raw(self):
        return random.randint(-100,-20)
    
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
