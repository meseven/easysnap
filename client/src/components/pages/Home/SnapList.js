import React from 'react';
import { Query } from 'react-apollo';
import { GET_SNAPS, SNAP_CREATED } from '../../../queries';

import SnapListWrapper from './SnapListWrapper';

const SnapList = ({ session }) => (
	<div>
		<Query query={GET_SNAPS}>
			{({ data, subscribeToMore, loading, error }) => {
				if (loading) return <div className="loading">Loading snaps...</div>;
				if (error) return <div>Error.</div>;

				return (
					<SnapListWrapper
						subscribeToNewSnaps={() => {
							subscribeToMore({
								document: SNAP_CREATED,
								updateQuery: (prev, { subscriptionData }) => {
									if (!subscriptionData.data) return prev;

									const newItem = subscriptionData.data.snap;

									if (session.activeUser.id !== newItem.user.id) {
										if (!prev.snaps.find(snap => snap.id === newItem.id)) {
											return {
												...prev,
												snaps: [newItem, ...prev.snaps],
											};
										} else {
											return prev;
										}
									}
								},
							});
						}}
						data={data}
					/>
				);
			}}
		</Query>
	</div>
);

export default SnapList;
