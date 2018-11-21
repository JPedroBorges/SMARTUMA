from TempReader import TempReader
from SignalTranslator import SignalTranslator
from DeviceScanner import DeviceScanner

if __name__ == "__main__":
    SignalTranslator().start()
    TempReader().start()
    DeviceScanner().start()
        