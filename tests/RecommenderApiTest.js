"use strict";

var request = require('supertest');
var baseUrl = 'http://localhost:3000';

describe('Recommender API', function() {

	describe('GET collection', function() {
		it('Should return json', function(done) {
			request(baseUrl)
				.get('/api/v1/recommendations')
				.expect('Content-Type', 'application/json')
				.expect(200, done);
		});
	});
});
