"use strict";

var Data = require('./Data');
var React = require('react');

module.exports = React.createClass({

	render: function() {
		return (<form>
			<div>
				<label for="zip">Your Zip Code</label>
				<input type="text" name="zip"/>
			</div>
			<div>
				<label for="light">Hours of Light</label>
				<input type="text" name="light"/>
			</div>
			<button type="submit">Get Recommendations</button>
		</form>)
	},

});