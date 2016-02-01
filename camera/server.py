import SimpleHTTPServer
import SocketServer
import camera

PORT = 800

class ServerHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):

    def do_GET(self):
        SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        self.send_response(201)
        self.send_header("Content-type", "image/jpeg")
        self.end_headers()

        imageInBits = camera.capture()

        self.wfile.write(image)
        self.wfile.close()

Handler = ServerHandler

httpd = SocketServer.TCPServer(("", PORT), Handler)

print "serving at port", PORT
httpd.serve_forever()