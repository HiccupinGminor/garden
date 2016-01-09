"use strict";

const baseUrl = '/api/v1',
			ReadingsController = require('./controllers/ReadingsController'),
			RecommendationsController = require('./controllers/RecommendationsController'),
			SystemController = require('./controllers/SystemController');

module.exports = function routes(app, io) {

	app.post(baseUrl + '/readings', ReadingsController.create(io));

	app.get(baseUrl + '/readings', ReadingsController.all(io));

	app.get(baseUrl + '/readings/:id?', ReadingsController.find(io));

	app.get(baseUrl + '/recommendations', RecommendationsController.all(io));

	app.get(baseUrl + '/system', SystemController.first);
};