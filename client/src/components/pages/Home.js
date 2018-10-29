import React, {Component} from 'react';

import { Query } from 'react-apollo';
import { GET_SNAPS } from '../../queries';


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

					<Query query={GET_SNAPS}>
						{
							({ data, loading, error }) => {
								if (loading) return <div>Loading snaps...</div>;
								if (error) return <div>Error.</div>;

								console.log(data);
								return (
									<ul className="snaps">
										{
											data.snaps.map(snap => (
												<li key={snap.id}>
													<div className="title">{ snap.text }</div>
													<div className="date">
														<span className="username">@{ snap.user.username } </span>
														<span>now</span>
													</div>
												</li>
											))
										}
									</ul>
								)

							}
						}
					</Query>

				</div>
				<div className="counter">3 snap(s)</div>
			</div>
		);
	}
}

export default Home;
