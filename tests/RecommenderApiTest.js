"use strict";

var request = require('supertest');
var baseUrl = 'http://localhost:3000';
var baseRoute = '/api/v1/recommendations';
describe('Recommender API', function() {
	describe('GET collection', function() {
		it('Should return a 400 without zip code', function(done) {
			request(baseUrl)
				.get(baseRoute)
				.expect(400, done);
		});

		it('Should return json array with a 200 with zip code', function(done) {
			request(baseUrl)
				.get(baseRoute + '?zip=90004')
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(function(res) {
					if(!Array.isArray(res.body)) {
						throw new Error("Body should be an array");
					}
				})
				.expect(200, done);
		});

		it('Should return a 400 with a bogus zip code', function(done) {
			request(baseUrl)
				.get(baseRoute + '?zip=notrealzip')
				.expect(400, done);
		});
	});
});
