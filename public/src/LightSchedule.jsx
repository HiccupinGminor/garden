"use strict";

const React = require('react');
const Nouislider = require('react-nouislider');

module.exports = React.createClass({

	render: () => {
		return (
			<Nouislider range={{min: 0, max: 100}} start={[10, 25]} tooltips connect={true}/>
		);
	}
});