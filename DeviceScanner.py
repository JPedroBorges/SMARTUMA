import time
import subprocess
from netaddr import *
from Component import Component

network = '10.2.0.0/16'

class DeviceScanner(Component):

        def __init__(self,GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL,SAMPLING_RATE):
            super().__init__(GET_TOKEN_URL,GET_TOKEN_HEADERS,GET_TOKEN_DATA,POST_DATA_URL,SAMPLING_RATE)

        def run(self):

            while True:

                count = 0

                for ip in  IPSet([network]):
                    try:
                        print("pinging "+str(ip))
                        response = subprocess.check_output(
                        ["ping", "-c", "1", "-n", "-W", "1", "-i","0.2", str(ip)],
                        stderr=subprocess.STDOUT,
                        universal_newlines=True)
                        count += 1
                    except subprocess.CalledProcessError:
                        pass

                print('@@ Detected {} devices! @@'.format(count))

                self.post_data({ 'value': count, 'unit':'devices' })

                count = 0