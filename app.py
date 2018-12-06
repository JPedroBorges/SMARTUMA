import os
from TempReader import TempReader
from SignalTranslator import SignalTranslator
from DeviceScanner import DeviceScanner

os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')

CREDENTIALS_FILE = "credentials.conf"
SEPARATOR = "="

GET_TOKEN_URL = 'https://jpborges.pt/smartuma/oauth/token'
GET_TOKEN_HEADERS = { 'Accept': 'application/json' }
GET_TOKEN_DATA = { "grant_type" : "password" }
POST_DATA_URL = 'https://jpborges.pt/smartuma/api/sensors'

with open(CREDENTIALS_FILE, "r") as file:
    for line in file:
        line = line.split(SEPARATOR)
        prop = line[0]
        value = line[1][:-1]
        GET_TOKEN_DATA[prop] = value
    
if __name__ == "__main__":
    SignalTranslator(GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL).start()
    TempReader(GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL).start()
    DeviceScanner(GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL).start()