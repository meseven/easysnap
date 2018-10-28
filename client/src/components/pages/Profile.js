import React from 'react';
import Moment from 'react-moment';

const Profile = ({ session: { activeUser } }) => (
	<div>
		<h3>Profile</h3>

		<div>
			<Moment date={activeUser.createdAt} format="YYYY/MM/DD" />
		</div>

		<strong>
			@{activeUser.username}
		</strong>
	</div>
);

export default Profile;
