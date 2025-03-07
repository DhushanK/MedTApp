import serial
import time

BLUETOOTH_PORT = "COM4"
BAUD_RATE = 9600  

try:
    ser = serial.Serial(BLUETOOTH_PORT, BAUD_RATE, timeout=1)
    print(f"Connected to {BLUETOOTH_PORT}")

    while True:
        data = "37,-122|Car|3,4\n"
        ser.write(data.encode())  
        print(f"Sent: {data.strip()}")
        time.sleep(2)

except serial.SerialException as e:
    print(f"Error: {e}")

except KeyboardInterrupt:
    ser.close()
    print("\nStopped")