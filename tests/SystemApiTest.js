"use strict";

const request = require('supertest'),
			baseUrl = 'http://localhost:3000',
			baseRoute = '/api/v1/system';

describe('System API', function() {
	describe('Get one and only system record', function() {
		it('Should return a 200, Response body should not be an array', function(done) {
			request(baseUrl)
				.get(baseRoute)
				.expect('Content-Type', 'application/json; charset=utf-8')
				.expect(function(res) {
					if(Array.isArray(res.body)) {
						throw new Error("Body should not be an array");
					}
				})
				.expect(200, done);
		});
	});
});

