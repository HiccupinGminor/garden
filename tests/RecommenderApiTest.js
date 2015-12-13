"use strict";

var request = require('supertest');
var baseUrl = 'http://localhost:3000';

describe('Recommender API', function() {

	describe('GET collection', function() {
		it('Should return a 400 without zip code', function(done) {
			request(baseUrl)
				.get('/api/v1/recommendations')
				.expect(400, done);
		});

		it('Should return json with a 200 with zip code', function(done) {
			request(baseUrl)
				.get('/api/v1/recommendations?zip=90000')
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(200, done);
		});
	});
});
