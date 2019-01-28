import React, { Component, Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import sessionWrapperHOC from './sessionWrapperHOC';
import Header from './Header';

// pages
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Join from './pages/Join';
import Profile from './pages/Profile';

const Root = ({ refetch, session }) => (
	<Router>
		<Fragment>
			<Header session={session} />
			<Switch>
				<Route path="/" exact render={ () => <Home session={session} />} />
				<Route path="/login" render={ () => <Login refetch={refetch} />} />
				<Route path="/join" render={ () => <Join refetch={refetch} />} />
				<Route path="/profile" render={ () => <Profile session={session} />} />
				<Redirect to="/" />
			</Switch>
		</Fragment>
	</Router>
);

const RootWithSessionWrapper = sessionWrapperHOC(Root);

class App extends Component {
  render() {
    return (
			<div id="app">
				<div className="container">
					<RootWithSessionWrapper />
				</div>
			</div>
    );
  }
}

export default App;
