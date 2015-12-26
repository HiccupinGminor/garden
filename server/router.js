"use strict";

var baseUrl = '/api/v1';
var ReadingsController = require('./controllers/ReadingsController');
var RecommendationsController = require('./controllers/RecommendationsController');

module.exports = function routes(app, io) {

	app.post(baseUrl + '/readings', ReadingsController.create(io));

	app.get(baseUrl + '/readings', ReadingsController.all(io));

	app.get(baseUrl + '/readings/:id?', ReadingsController.find(io));

	app.get(baseUrl + '/recommendations', RecommendationsController.all(io));
};