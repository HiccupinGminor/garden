"use strict";

const Data = require('./Data'),
			React = require('react');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			error: '',
			result: [],
			message: '',
			zip: '',
			light: '',
		};
	},

	submit: function() {
		const react = this;

		function listener() {
			if(this.status != 200) {
				react.setState({
					error: 'There was a problem loading your recommendations.',
					result: []
				});
			}
			else {
				react.setState({error: ''});
			}

			if((JSON.parse(this.response)).length === 0) {
				react.setState({
					message: 'There were no results for your search.', 
					result: []
				});
			}
			else {
				react.setState({
					result: JSON.parse(this.response), 
					message: ''
				});
			}
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
		const results = this.state.result.map(function(result) {
			return <li>{result}</li>;
		});

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
				<p>{this.state.error}</p>
				<p>{this.state.message}</p>
				<ul>
					{results}
				</ul>
			</div>)
	},

});