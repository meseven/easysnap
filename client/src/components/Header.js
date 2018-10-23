import React from 'react';

const Header = (props) => {
	return (
		<div className="header">
			<div className="logo">
				<h2 className="logo__title">easysnap</h2>
			</div>

			<div className="header_menu">
				<div className="active">
					snaps
				</div>
				<div>
					login
				</div>
				<div>
					join
				</div>
			</div>
		</div>
	);
};

export default Header;
