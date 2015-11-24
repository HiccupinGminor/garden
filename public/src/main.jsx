"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var ReadingsList = React.createClass({
	getInitialState: function() {
		return {
			lux: 'Pending',
			humidity: 'Pending',
			pH: 'Pending',
		};
	},

	render: function() {
		return (
			<Reading data={this.state} />
		);
	},
	
	componentDidMount: function() {
		var that = this;

		function listener () {
		  var newState = JSON.parse(this.response)[0];

		  that.setState({
		  	lux: newState.lux,
		  	humidity: newState.humidity,
		  	pH: newState.pH
		  });
		};

		var req = new XMLHttpRequest();
		req.addEventListener("load", listener);
		req.open("GET", "api/v1/readings");
		req.send();
	}
});

var Reading = React.createClass({
	render: function() {
		return (
			<ul>
				<li>Lux: {this.props.data.lux}</li>
				<li>Humidity: {this.props.data.humidity}</li>
				<li>pH: {this.props.data.pH}</li>
			</ul>
		)
	}
});

ReactDOM.render(<ReadingsList />, document.getElementById('mount'));
