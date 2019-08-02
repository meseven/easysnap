import React, {Component} from 'react';

import NewSnapForm from './NewSnapForm';
import SnapList from './SnapList';
import JoinedUs from './JoinedUs';

class Home extends Component {
	render() {
		return (
			<div>
				<div className="description">
					<p className="sub_header__desc">simple snap app with <span>react</span>.</p>
				</div>

				<NewSnapForm  session={this.props.session}/>
				<JoinedUs />
				<SnapList  session={this.props.session} />
			</div>
		);
	}
}

export default Home;
