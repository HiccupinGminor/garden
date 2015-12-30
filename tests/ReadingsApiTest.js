"use strict";

const request = require('supertest');
const Reading = require('../server/models/Reading');
const baseUrl = 'http://localhost:3000';

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

	describe('GET only one record', function() {
		const limit = 1;
		it('Should return only one record', function(done) {
			request(baseUrl)
				.get('/api/v1/readings?limit=' + limit)
				.expect(function(res) {
					if(!Array.isArray(res.body)) {
						throw new Error("Body should still be an array");
					}

					if(res.body.length != limit) {
						throw new Error("Results should be limited by query string");
					}
				})
				.expect(200, done);
		});
	});

	describe('POST collection with no payload', function() {
		it('Should return an error', function(done) {
			request(baseUrl)
				.post('/api/v1/readings')
				.expect(400, done);
		});
	});

	const reading = {
		"lux": 100,
		"temp": 1000,
		"humidity": 50.0,
		"pH": 6.2
	};

	describe('POST collection', function() {
		it('Should return a 201 on success and return a response payload', function(done) {
			request(baseUrl)
				.post('/api/v1/readings')
				.send(reading)
				.expect(function(res) {
					var key;
					for(key in reading) {
						if(!res.body[key]) {
							throw new Error("'" + key + "' Should be returned in response payload object.");
						}
					}
				})
				.expect(201, done);
		});
	});

});