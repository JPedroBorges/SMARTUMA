import threading
import requests

class Component(threading.Thread):
    def __init__(self,GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL):
        threading.Thread.__init__(self)
        self.GET_TOKEN_URL = GET_TOKEN_URL      
        self.GET_TOKEN_HEADERS = GET_TOKEN_HEADERS
        self.GET_TOKEN_DATA = GET_TOKEN_DATA      
        self.POST_DATA_URL = POST_DATA_URL

    def post_data(self,data):
        req = requests.post(self.GET_TOKEN_URL, headers=self.GET_TOKEN_HEADERS, data=self.GET_TOKEN_DATA, timeout=5)
        if(req.status_code == requests.codes.ok):
            print('error ' + str(req.status_code) + ' while requesting token')
        else:
            print(req.json())
            POST_DATA_HEADERS = { }
            POST_DATA = { 'device_count': data }
            req = requests.post(self.POST_DATA_URL, headers=POST_DATA_HEADERS, data=POST_DATA, timeout=5)
            if(req.status_code != 200):
                print('error ' + str(req.status_code) + ' while sending data')
            else:
                print('success')
