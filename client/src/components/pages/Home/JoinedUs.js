import React from 'react';

import { Subscription } from 'react-apollo';
import { USER_CREATED } from '../../../queries';

const JoinedUs = () => (
	<Subscription subscription={USER_CREATED}>
		{({ data, loading }) => (
			<div className="joinedUs">
				{
					!loading &&
					<div>
						<strong>{ data.user.username }</strong> is joined to us.
					</div>
				}
			</div>
		)}
	</Subscription>
);

export default JoinedUs;