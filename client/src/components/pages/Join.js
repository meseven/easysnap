import React, {Component} from 'react';

class Join extends Component {
	render() {
		return (
			<div>
				<form className="user-form">
					<label>
						<input type="text" placeholder="username"/>
					</label>
					<label>
						<input type="password" placeholder="password"/>
					</label>
					<label>
						<input type="password" placeholder="confirm password"/>
					</label>
					<label>
						<button>Join</button>
					</label>
				</form>
			</div>
		);
	}
}

export default Join;
