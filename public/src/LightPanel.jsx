"use strict";

const React = require('react'),
			Switch = require('./Switch.jsx');

module.exports = React.createClass({

	render: function() {
		return (
			<section>
				<h1>Light Controls</h1>
				<section class="sub-section">
					<h2>Manual Control</h2>
					<p>Toggle the lights on and off</p>
					<Switch/>
				</section>
			</section>
		);
	}
});