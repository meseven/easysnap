import React, {Component} from 'react';

const initialState = {
	username: '',
	password: ''
};

class Login extends Component {
	state = {
		...initialState
	};

	onChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	};

	render() {
		return (
			<div>
				<form className="user-form">
					<label>
						<input
							onChange={this.onChange}
							name="username"
							type="text"
							placeholder="username"/>
					</label>
					<label>
						<input
							onChange={this.onChange}
							name="password"
							type="password"
							placeholder="password"/>
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
