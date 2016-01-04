"use strict";

var React = require('react'),
 		ReactDOM = require('react-dom'),
 		ReadingsList = require('./ReadingsList.jsx'),
 		Recommender = require('./Recommender.jsx'),
 		Router = require('react-router').Router,
 		Route = require('react-router').Route;

ReactDOM.render(
	<Router>
		<Route path="/" component={ReadingsList}/>
		<Route path="/recommend" component={Recommender}/>
	</Router>, document.getElementById('app'));
