import threading
import requests
import json
from Conn import Conn

TIMEOUT = 10

class Component(threading.Thread):
    def __init__(self,GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL,SAMPLING_RATE,DEVICE_ID):
        threading.Thread.__init__(self)
        self.GET_TOKEN_URL = GET_TOKEN_URL      
        self.GET_TOKEN_HEADERS = GET_TOKEN_HEADERS
        self.GET_TOKEN_DATA = GET_TOKEN_DATA      
        self.POST_DATA_URL = POST_DATA_URL
        self.SAMPLING_RATE = SAMPLING_RATE

    def post_data(self,data):
        self.conn = create_connection(database)

        success = 0
        measure = (DEVICE_ID, value, unit, datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'), success)


        res = requests.post(self.GET_TOKEN_URL, headers=self.GET_TOKEN_HEADERS, data=self.GET_TOKEN_DATA, timeout=TIMEOUT)
        if(res.status_code < 200 or res.status_code >= 300):
            print('error ' + str(res.status_code) + ' while requesting token')
        else:
            print('success getting token')
            token = res.json()['access_token']
            POST_DATA_HEADERS = { 'Authorization': 'Bearer ' + token }
            res = requests.post(self.POST_DATA_URL, headers=POST_DATA_HEADERS, data=data, timeout=TIMEOUT)
            print(res.json())
            if(res.status_code < 200 and res.status_code >= 300):
                print('error ' + str(res.status_code) + ' while sending data')            
            else:
                print('success sending data')
                measure[5] = 1

        with conn:
            create_measure(conn, measure)
