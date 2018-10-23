import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<div className="header">
			<div className="logo">
				<h2 className="logo__title">easysnap</h2>
			</div>

			<div className="header_menu">
				<NavLink to='/' exact>snaps</NavLink>
				<NavLink to='/login'>login</NavLink>
				<NavLink to='/join'>join</NavLink>
			</div>
		</div>
	);
};

export default Header;
