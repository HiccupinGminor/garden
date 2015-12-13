"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ReadingsList = require('./ReadingsList.jsx');
var Recommender = require('./Recommender.jsx');
var Router = require('react-router').Router
var Route = require('react-router').Route

ReactDOM.render(
	<Router>
		<Route path="/" component={ReadingsList}/>
		<Route path="/recommend" component={Recommender}/>
	</Router>, document.getElementById('app'));
