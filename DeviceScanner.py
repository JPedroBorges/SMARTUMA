import time
import threading
import os
from netaddr import *
import subprocess
import requests
from Component import Component

network = '10.2.0.0/16'

class DeviceScanner(Component):

        def __init__(self,GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL,SAMPLING_RATE):
            super().__init__(GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL,SAMPLING_RATE)

        def run(self):

            while True:
                global count
                count = 0

                subthreads = [PingThread(ip) for ip in  IPSet([network])]
                
                for t in subthreads:
                    t.join()

                print('@@ Detected {} devices! @@'.format(count))

                self.post_data({ 'value': count, 'unit':'devices' })

                subthreads = []
                count = 0

            time.sleep(self.SAMPLING_RATE)


class PingThread(threading.Thread):

        def __init__(self,ip):
            threading.Thread.__init__(self)
            self.ip = ip
            self.start()

        def run(self):

            print('pinging {}'.format(self.ip))

            try:
                response = subprocess.check_output(
                ["ping", "-c", "1", "-n", "-W", "1", "-i","0.2", str(self.ip)],
                stderr=subprocess.STDOUT,
                universal_newlines=True)

                global count 
                count += 1

                print(" -- {} is alive! -- ".format(self.ip))

            except subprocess.CalledProcessError:
                pass


