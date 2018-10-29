import React from 'react';

import { Query } from 'react-apollo';
import { GET_ACTIVE_USER } from '../queries';
import { Redirect } from 'react-router-dom';

const auth = condition => Component => props => (
	<Query query={GET_ACTIVE_USER}>
		{
			({ data, loading }) => {
				if (loading) return null;

				return condition(data) ? <Component {...props} /> : <Redirect to="/" />
			}
		}
	</Query>
);

export default auth;


