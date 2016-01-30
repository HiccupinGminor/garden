const RaspiCam = require('raspicam');

module.exports.capture = function capture() {
	let cam = new RaspiCam({
		mode: 'photo',
		output: ''
	});	

	cam.start();
	cam.stop();

	cam.on('stop', function() {
		// Access image from file
		// Return from functions
	});
}