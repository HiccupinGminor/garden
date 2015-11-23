"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Readings = React.createClass({
	render: function() {
		return (
			<ul>
			{this.props.readings.map(function(reading) {
				return <li>{reading.lux}</li>
			})}
			</ul>
		);
	}
});

ReactDOM.render(<Readings readings={[{lux:10},{lux:100}]} />, document.getElementById('mount'));
