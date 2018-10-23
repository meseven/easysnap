import React, { Component, Fragment } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import Header from './Header';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Join from './pages/Join';

const Root = () => (
	<Router>
		<Fragment>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/join" component={Join} />
				<Redirect to="/" />
			</Switch>
		</Fragment>
	</Router>
);

class App extends Component {
  render() {
    return (
			<div id="app">
				<div className="container">



					<Root />

				</div>
			</div>
    );
  }
}

export default App;
