import React from 'react';
import { withRouter } from 'react-router-dom';

import { ApolloConsumer } from 'react-apollo';

const onClick = (history, client) => {
	localStorage.setItem('token','');
	history.push('/');
	client.resetStore();
};

const Logout = ({ history }) => (
	<ApolloConsumer>
		{
			(client) => {
				return <button onClick={() => onClick(history,client)}>Logout</button>
			}
		}
	</ApolloConsumer>
);

export default withRouter(Logout);

