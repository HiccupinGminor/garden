const http = require('http');
const cam = require('./camera');

const server = http.createServer((request, response) => {
	if(request.method == 'POST') {
		response.writeHead(201);

		let image = cam.capture();
		response.write(image);
		response.end();
	}
});

server.listen(8100);

