"use strict";

const React = require('react'),
 		ReactDOM = require('react-dom'),
 		ReadingsList = require('./ReadingsList.jsx'),
 		Recommender = require('./Recommender.jsx'),
 		Router = require('react-router').Router,
		Route = require('react-router').Route,
		LightPanel = require('./LightPanel.jsx');
		
ReactDOM.render(
	<Router>
		<Route path="/" component={ReadingsList}/>
		<Route path="/recommend" component={Recommender}/>
		<Route path="/lights" component={LightPanel}/>
	</Router>, document.getElementById('app'));
