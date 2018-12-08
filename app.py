import os
from TempReader import TempReader
from SignalTranslator import SignalTranslator
from DeviceScanner import DeviceScanner

os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')

CREDENTIALS_FILE = "credentials.conf"
SENSORS_FILE = "sensors.conf"
SEPARATOR = "="

GET_TOKEN_URL = 'https://jpborges.pt/smartuma/oauth/token'
GET_TOKEN_HEADERS = { 'Accept': 'application/json' }
GET_TOKEN_DATA = { "grant_type" : "password" }
POST_DATA_URL = 'https://jpborges.pt/smartuma/api/sensors/@/measures'

SENSORS = {}

with open(CREDENTIALS_FILE, "r") as file:
    for line in file:
        line = line.split(SEPARATOR)
        prop = line[0]
        value = line[1][:-1]
        GET_TOKEN_DATA[prop] = value

with open(SENSORS_FILE, "r") as file:
    for line in file:
        line = line.split(SEPARATOR)
        prop = line[0]
        value = line[1][:-1]
        SENSORS[prop] = value        

print(SENSORS)
    
if __name__ == "__main__":
    TempReader(GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL.replace("@",SENSORS["temp"])).start()
    SignalTranslator(GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL.replace("@",SENSORS["signal"])).start()    
    #DeviceScanner(GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL.replace("@",SENSORS["device"])).start()