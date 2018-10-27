import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const Header = ({ session }) => {
	return (
		<div className="header">
			<div className="logo">
				<h2 className="logo__title">easysnap</h2>
			</div>

			<div className="header_menu">
				<NavLink to='/' exact>snaps</NavLink>
				{
					session.activeUser ? <LinksWithLogin session={session} /> : <LinksWithUnLogin />
				}
			</div>
		</div>
	);
};

const LinksWithLogin = ({ session }) => (
	<Fragment>
		<NavLink to='/profile'>@{session.activeUser.username}</NavLink>
		<Logout />
	</Fragment>
);

const LinksWithUnLogin = () => (
	<Fragment>
		<NavLink to='/login'>login</NavLink>
		<NavLink to='/join'>join</NavLink>
	</Fragment>
);

export default Header;
