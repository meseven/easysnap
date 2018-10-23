import React, {Component} from 'react';

class Login extends Component {
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
						<button>Login</button>
					</label>
				</form>
			</div>
		);
	}
}

export default Login;
