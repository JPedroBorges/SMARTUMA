import os
from TempReader import TempReader
from SignalTranslator import SignalTranslator
from DeviceScanner import DeviceScanner

os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')
    
if __name__ == "__main__":
    SignalTranslator().start()
    TempReader().start()
    DeviceScanner().start()
        