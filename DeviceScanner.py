import time
import threading

class DeviceScanner(threading.Thread):

        def __init__(self):
            threading.Thread.__init__(self)

        def run(self):
            while True:
              print("device")
              time.sleep(1)            