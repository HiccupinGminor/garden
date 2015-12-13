"use strict";

var Data = require('./Data');
var React = require('react');

module.exports = React.createClass({
	
	submit: function() {

		function listener() {
			this.props.result = 'FOO';
		}

		Data.request("GET", "api/v1/recommendations", listener);
	},

	render: function() {
		return (
			<div>
				<form>
				<div>
					<label for="zip">Your Zip Code</label>
					<input type="text" name="zip"/>
				</div>
				<div>
					<label for="light">Hours of Light</label>
					<input type="text" name="light"/>
				</div>
				<button type="submit" onClick={this.submit}>Get Recommendations</button>
				</form>
				<div>
					{this.props.result}
				</div>
			</div>)
	},

});