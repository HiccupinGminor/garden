"use strict";

var Data = require('./Data');
var React = require('react');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			result: [],
			zip: '',
			light: '',
		};
	},

	submit: function() {
		var self = this;

		function listener() {
			self.setState({result: JSON.parse(this.response)});
		}

		Data.request("GET", "api/v1/recommendations?zip=" + this.state.zip + "&light=" + this.state.light , listener);
	},

	changeZip: function(event) {
		this.setState({zip: event.target.value});
	},

	changeLight: function(event) {
		this.setState({zip: event.target.value});
	},

	render: function() {
		var results = this.state.result.map(function(result) {
			return <li>{result}</li>;
		})
		return (
			<div>
				<div>
					<label for="zip">Your Zip Code</label>
					<input type="text" name="zip" value={this.state.zip} onChange={this.changeZip}/>
				</div>
				<div>
					<label for="light">Hours of Light</label>
					<input type="text" name="light" value={this.state.light} onChange={this.changeLight}/>
				</div>
				<button type="submit" onClick={this.submit}>Get Recommendations</button>
				<ul>
					{results}
				</ul>
			</div>)
	},

});