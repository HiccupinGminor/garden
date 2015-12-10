module.exports = {

	request: function(method, url, listener) {
		var req = new XMLHttpRequest();
		req.addEventListener("load", listener);
		req.open(method, url);
		req.send();	
	}
}