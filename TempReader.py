import glob
import time
import threading
import random

sampling_rate = 60 * 5

class TempReader(threading.Thread):

    def __init__(self):
        threading.Thread.__init__(self)

    def run(self):
        while True:
            print("Temperature: " + str(self.read_temp()) + " ºC")            
            time.sleep(sampling_rate)   

    def read_temp(self):
        return round(random.uniform(20,30),3)
