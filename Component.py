import threading
import requests
import json

TIMEOUT = 10

class Component(threading.Thread):
    def __init__(self,GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL):
        threading.Thread.__init__(self)
        self.GET_TOKEN_URL = GET_TOKEN_URL      
        self.GET_TOKEN_HEADERS = GET_TOKEN_HEADERS
        self.GET_TOKEN_DATA = GET_TOKEN_DATA      
        self.POST_DATA_URL = POST_DATA_URL

    def post_data(self,data):
        res = requests.post(self.GET_TOKEN_URL, headers=self.GET_TOKEN_HEADERS, data=self.GET_TOKEN_DATA, timeout=TIMEOUT)
        if(res.status_code != 200):
            print('error ' + str(res.status_code) + ' while requesting token')
        else:
            print('success getting token')
            token = res.json()['access_token']
            POST_DATA_HEADERS = { 'token': token }
            POST_DATA = { 'device_count': data }
            res = requests.post(self.POST_DATA_URL, headers=POST_DATA_HEADERS, data=POST_DATA, timeout=TIMEOUT)
            if(res.status_code != 200):
                print('error ' + str(res.status_code) + ' while sending data')                
            else:
                print('success sending data')
