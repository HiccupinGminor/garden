import time
import picamera

camera = picamera.PiCamera()

try:
    time.sleep(2)
    timeString = time.strftime("%m-%d-%y_%H-%M")
    camera.capture("images/" + timeString + ".jpg")
finally:
    camera.close()
