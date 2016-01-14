"use strict";

const React = require('react');

require('isomorphic-fetch');

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

		fetch("api/v1/recommendations?zip=" + this.state.zip + "&light=" + this.state.light)
			.then((response) => {
				if(response.status != 200) {
					react.setState({
						error: 'There was a problem loading your recommendations.',
						result: []
					});
				}
				else {
					react.setState({error: ''});
					return response.json();
				}
			})
			.then((results) => {
				if(results.length === 0) {
					react.setState({
						message: 'There were no results for your search.', 
						result: []
					});
				}
				else {
					react.setState({
						result: results, 
						message: ''
					});
				}
			});
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