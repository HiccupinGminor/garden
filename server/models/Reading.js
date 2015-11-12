"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
	
var schema = new Schema({
	lux: Number,
	temp: Number,
	humidity: Number,
	pH: Number,
});

var Reading = mongoose.model('Reading', schema);

module.exports = Reading;
