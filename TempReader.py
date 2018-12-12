import time
import random
from Component import Component

class TempReader(Component):

    def __init__(self,GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL,SAMPLING_RATE):
        super().__init__(GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL,SAMPLING_RATE)

    def run(self):
        while True:
            temp = self.read_temp()
            print("Temperature: " + str(temp) + "ºC")
            self.post_data({ 'value': temp, 'unit': 'ºC' })
            time.sleep(self.SAMPLING_RATE)   

    def read_temp(self):
        return round(random.uniform(20,30),3)