import threading
import time
import subprocess
import requests
import random
from Component import Component

interface = "wlan0"
#sampling_rate = 5
sampling_rate = 60 * 5

class SignalTranslator(Component):

   def __init__(self,GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL):
      super().__init__(GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL)

   def run(self):
      while True:
         signal = self.read_signal_raw()  
         print("Wifi Signal: " + self.translate_signal(signal) + '(' + str(signal) + ')')
         self.post_data({ 'value': signal, 'unit': 'dBm' })
         time.sleep(sampling_rate)

   def read_signal_raw(self):
      proc = subprocess.Popen(["iwlist", interface, "scan"],stdout=subprocess.PIPE, universal_newlines=True)
      out, err = proc.communicate()

      try:
         value = int(out.split("\n")[4].split("Signal level=")[1].split(" ")[0])
      except:
         return round(random.uniform(-100,0),3)

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
