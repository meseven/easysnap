import React from 'react';
import {Query} from "react-apollo";
import {GET_SNAPS, SNAP_CREATED} from "../../../queries";

import SnapListItem from './SnapListItem';

const SnapList = () => (
	<div>
		<Query query={GET_SNAPS}>
			{
				({data, subscribeToMore, loading, error}) => {
					if (loading) return <div className="loading">Loading snaps...</div>;
					if (error) return <div>Error.</div>;

					subscribeToMore({
						document: SNAP_CREATED,
						updateQuery: (prev, { subscriptionData }) => {
							if (!subscriptionData.data) return prev;

							const newItem = subscriptionData.data.snap;

							if (!prev.snaps.find(snap => snap.id === newItem.id)) {
							  return {
									...prev,
									snaps: [newItem, ...prev.snaps]
								}
							}else{
								return prev;
							}
						}
					});

					return (
						<div>
							<ul className="snaps">
								{
									data.snaps.map(snap => (
										<SnapListItem key={snap.id}  snap={snap} />
									))
								}
							</ul>

							<div className="counter">{data.snaps.length} snap(s)</div>
						</div>
					)
				}
			}
		</Query>
	</div>
);

export default SnapList;