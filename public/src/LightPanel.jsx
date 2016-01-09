"use strict";

const React = require('react'),
			Switch = require('./Switch.jsx');

module.exports = React.createClass({

	render: function() {
		return (
			<section>
				<h1>Lights</h1>
				<Switch/>
			</section>
		);
	}
});