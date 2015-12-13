"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ReadingsList = require('./ReadingsList.jsx');
var Recommender = require('./Recommender.jsx');

ReactDOM.render(<Recommender />, document.getElementById('mount-recommender'));

ReactDOM.render(
	<ReadingsList />, document.getElementById('mount-reading-list'));
