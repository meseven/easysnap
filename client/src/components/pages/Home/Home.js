import React, {Component} from 'react';

import NewSnapForm from './NewSnapForm';
import SnapList from './SnapList';

class Home extends Component {
	render() {
		return (
			<div>
				<div className="description">
					<p className="sub_header__desc">simple snap app with <span>react</span>.</p>
				</div>

				<NewSnapForm  session={this.props.session}/>
				<SnapList />
			</div>
		);
	}
}

export default Home;
