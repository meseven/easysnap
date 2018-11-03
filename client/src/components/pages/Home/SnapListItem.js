import React from 'react';
import TimeAgo from "react-timeago";

const SnapListItem = ({ snap }) => (
	<li className={snap.id < 0 ? 'optimistic' : ''}>
		<div className="title">
			<span className="username">@{snap.user.username} </span>
			{snap.text}
		</div>
		<div className="date">
			<span>
				{snap.id < 0 ? 'sending...' : <TimeAgo date={snap.createdAt}/>}
			</span>
		</div>
	</li>
);

export default SnapListItem;