"use strict";

var request = require('supertest');
var Reading = require('../server/models/Reading');
var baseUrl = 'http://localhost:3000';

describe('Readings API', function() {
	describe('GET collection', function() {
		it('Should return a JSON array', function(done) {
			request(baseUrl)
				.get('/api/v1/readings')
				.expect('Content-Type', /json/)
				.expect(function(res) {
					if(!Array.isArray(res.body)) {
						throw new Error("Body should be an array");
					}
				})
				.expect(200, done);
		});
	});

	describe('GET non-existent record', function() {
		it('Should return a 404', function(done) {
			request(baseUrl)
				.get('/api/v1/readings/a-non-existent-id')
				.expect(404, done);
		})
	});

	describe('POST collection with no payload', function() {
		it('Should return an error', function(done) {
			request(baseUrl)
				.post('/api/v1/readings')
				.expect(400, done);
		});
	});
});