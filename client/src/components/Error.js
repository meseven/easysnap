import React from 'react';

const Error = props => {
	const { message } = props.error;
	return (
		<div>
			{ message }
		</div>
	);
};

export default Error;
