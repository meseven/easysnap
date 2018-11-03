import React from 'react';
import {Query} from "react-apollo";
import {GET_SNAPS} from "../../../queries";

import SnapListItem from './SnapListItem';

const SnapList = () => (
	<div>
		<Query query={GET_SNAPS}>
			{
				({data, loading, error}) => {
					if (loading) return <div className="loading">Loading snaps...</div>;
					if (error) return <div>Error.</div>;

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