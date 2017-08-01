import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Home from './components/home';
import SelectDevice from './components/select_device';
import SelectRepair from './components/select_repair';

const routes = (
		<Router history={browserHistory } >
			<Route path="/" component={ App } >
				<IndexRoute component={ Home } />
				<Route path="/select-device" component={ SelectDevice } />
				<Route path="/select-device/:device" component={ SelectDevice } />
				<Route path="/select-repair/:device/:repair" component={ SelectRepair } />
			</Route>
		</Router>
	)

Meteor.startup(() => {
	ReactDOM.render(routes , document.getElementById("render-container"));
});