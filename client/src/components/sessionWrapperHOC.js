import React from 'react';
import { Query } from 'react-apollo';

import { GET_ACTIVE_USER } from '../queries';

const sessionWrapperHOC = Component => props => (
	<Query query={GET_ACTIVE_USER}>
		{
			({ data, loading }) => {
				if (loading) return <div style={ {textAlign: 'center'} }>Loading...</div>

				console.log(data);
				return <Component {...props} />
			}
		}
	</Query>
);

export default sessionWrapperHOC;


