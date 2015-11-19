"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
	
var schema = new Schema({
	lux: {
		type: Number,
		required: true,
	},
	temp: {
		type: Number,
		required: true,
	},
	humidity: Number,
	pH: Number,
});

var Reading = mongoose.model('Reading', schema);

module.exports = Reading;