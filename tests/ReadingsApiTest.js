"use strict";

var request = require('supertest');
var Reading = require('../server/models/Reading');
var baseUrl = 'http://localhost:3000';

describe('Readings API', function() {

	var reading;

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
		var limit = 1;
		it('Should return only one record', function(done) {
			request(baseUrl)
				.get('/api/v1/readings?limit=' + limit + '&desc')
				.expect(200, done)
				.expect(function(res) {
					if(!Array.isArray(res.body)) {
						throw new Error("Body should still be an array");
					}

					if(res.body.length != limit) {
						throw new Error("Results should be limited by query string");
					}
				});
		});
	});

	describe('POST collection with no payload', function() {
		it('Should return an error', function(done) {
			request(baseUrl)
				.post('/api/v1/readings')
				.expect(400, done);
		});
	});

	reading = {
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