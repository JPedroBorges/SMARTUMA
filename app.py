import os
from TempReader import TempReader
from SignalTranslator import SignalTranslator
from DeviceScanner import DeviceScanner

os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')
    
if __name__ == "__main__":
    """while True:
        print("[ " + datetime.datetime.utcnow().strftime('%d %B %Y - %H:%M:%S') + " ]")
        print("Wifi Signal: " + translate_signal(read_signal_raw()))
        print("Temperature: " + str(read_temp()) + "ยบC")
        print("-------------------------------")
        
        time.sleep(1)"""

    SignalTranslator().start()
    TempReader().start()
    DeviceScanner().start()
        