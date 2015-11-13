var request = require('supertest')

describe('Readings API', function() {
	describe('GET', function() {
		it('Should return an array of results', function(done) {
			request('http://localhost:3000')
      	.get('/api/v1/readings')
      	.expect('Content-Type', /json/)
      	.expect(function(res){
      		if(!Array.isArray(res.body)) {
      			throw new Error("Body should be an array");
      		}
      	})
      	.expect(200, done);
		});
	});
});