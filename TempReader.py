import glob
import time
import threading
import requests
import random
from Component import Component

#sampling_rate = 5
sampling_rate = 60 * 5

class TempReader(Component):

    def __init__(self,GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL):
        super().__init__(GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL)

    def run(self):
        while True:
            temp = self.read_temp()
            print("Temperature: " + str(temp) + "ºC")
            self.post_data({ 'value': temp, 'unit': 'ºC' })
            time.sleep(sampling_rate)   

    def read_temp(self):
        return round(random.uniform(20,30),3)