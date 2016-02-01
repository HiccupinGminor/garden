import time
import picamera
import Image

def capture():	
	camera = picamera.PiCamera()

	try:
	    time.sleep(2)
	    timeString = time.strftime("%m-%d-%y_%H-%M")
	    filePath = "images/" + timeString + ".jpg"
	    camera.capture(filePath)
	    image = Image.open(filePath)
	    return image.bits
	    
	finally:
	    camera.close()
