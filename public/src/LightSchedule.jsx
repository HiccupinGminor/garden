"use strict";

const React = require('react');
const Nouislider = require('react-nouislider');

module.exports = React.createClass({

	render() {
		return (
			<Nouislider 
				range={{min: 1, max: 24}} 
				start={[8, 20]} 
				tooltips 
				connect={true} 
				step={1} 
		    format={{
		    	to(value) {
		    		let period = 'am'
		    		let num = value % 12;

		    		if(value >= 12) {
		    			period = 'pm';
		    		}

		    		if(num === 0) {
		    			num = 12;
		    		}

		    		return num + ':00 ' + period;
		    	},
		    	from(value) {
		    		return value;
		    	}
		    }}
			/>
		);
	}
});