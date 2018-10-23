import React, { Component } from 'react';

import Header from './Header';

// pages
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
			<div id="app">
				<div className="container">

					<Header />

					<Home />

				</div>
			</div>
    );
  }
}

export default App;
