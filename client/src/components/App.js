import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
			<div id="app">
				<div className="container">
					<div className="header">
						<div className="logo">
							<h2 className="logo__title">easysnap</h2>
						</div>

						<div className="header_menu">
							<div className="active">
								snaps
							</div>
							<div>
								login
							</div>
							<div>
								join
							</div>
						</div>
					</div>

					<div className="description">
						<p className="sub_header__desc">simple snap app with <span>react</span>.</p>
					</div>

					<div>
						<form>
							<input className="add-snap__input" type="text" placeholder="add snap"/>
						</form>
					</div>
					<div>
						<ul className="snaps">
							<li>
								<div className="title">Lorem ipsum dolor sit amet</div>
								<div className="date">
									<span>now</span>
								</div>
							</li>
							<li>
								<div className="title">Curabitur gravida arcu ac tortor dignissim.</div>
								<div className="date">
									<span>5 minutes ago</span>
								</div>
							</li>
							<li>
								<div className="title">Tristique risus nec feugiat in fermentum.</div>
								<div className="date">
									<span>7 minutes ago</span>
								</div>
							</li>
						</ul>
					</div>
					<div className="counter">3 snap(s)</div>
				</div>
			</div>
    );
  }
}

export default App;
