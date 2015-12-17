"use strict";

var zipMap = require('../data/hardiness-zones.json');

module.exports = {
	isValid: function(zip, light) {
		if(zip % 1 != 0 || !zipMap[zip]) {
			return false;
		}
		return true;
	},

	guess: function(zip, light) {
		return ['Carrots', 'Lettuce', 'Peas'];
	}
};