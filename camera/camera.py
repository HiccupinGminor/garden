import time
import picamera
from PIL import Image
import os

def capture():	
	camera = picamera.PiCamera()

	try:
	    time.sleep(2)
	    timeString = time.strftime("%m-%d-%y_%H-%M")
	    filePath = "images/" + timeString + ".jpg"
            camera.capture(filePath)
	    return os.path.dirname(os.path.realpath(__file__)) + "/" + filePath
	    
	finally:
	    camera.close()
