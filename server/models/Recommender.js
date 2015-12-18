"use strict";

var zipMap = require('../data/hardiness-zones.json');
var plants = require('../data/plant-recommendations.json');

module.exports = {
	isValid: function(zip, light) {
		if(zip % 1 != 0 || !zipMap[zip]) {
			return false;
		}
		return true;
	},

	guess: function(zip, light) {
		if(zipMap[zip]) {
			let zone = zipMap[zip].zone;

			return plants[zone];
		}
	}
};