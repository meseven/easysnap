import React, {Component} from 'react';

class Home extends Component {

	render() {
		return (
			<div>
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
		);
	}
}

export default Home;
