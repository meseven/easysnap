import React, {Component} from 'react';

import { Query } from 'react-apollo';
import { GET_SNAPS } from '../../queries';

import TimeAgo from 'react-timeago';

class Home extends Component {

	state = {
		text: '',
		user_id: ''
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	componentDidMount() {
		this.setState({
			user_id: this.props.session.activeUser.id
		});
	}


	render() {
		const { session } = this.props;

		return (
			<div>
				<div className="description">
					<p className="sub_header__desc">simple snap app with <span>react</span>.</p>
				</div>

				<div>
					<form>
						<input
							className="add-snap__input"
							type="text"
							name="text"
							onChange={this.onChange}
							disabled={!(session && session.activeUser)}
							placeholder={ session && session.activeUser ? 'add snap' : 'please login for add a new snap!' }/>
					</form>
				</div>

				<div>

					<Query query={GET_SNAPS}>
						{
							({ data, loading, error }) => {
								if (loading) return <div className="loading">Loading snaps...</div>;
								if (error) return <div>Error.</div>;

								return (
									<div>
										<ul className="snaps">
											{
												data.snaps.map(snap => (
													<li key={snap.id}>
														<div className="title">
															<span className="username">@{ snap.user.username } </span>
															{ snap.text }
														</div>
														<div className="date">
															<span>
																<TimeAgo date={ snap.createdAt } />
															</span>
														</div>
													</li>
												))
											}
										</ul>

										<div className="counter">{ data.snaps.length } snap(s)</div>
									</div>
								)
							}
						}
					</Query>

				</div>
			</div>
		);
	}
}

export default Home;
