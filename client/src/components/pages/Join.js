import React, {Component} from 'react';

class Join extends Component {
	state = {
		username: '',
		password: '',
		passwordConfirm: ''
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
							name="username"
							onChange={this.onChange}
							type="text"
							placeholder="username"/>
					</label>
					<label>
						<input
							name="password"
							onChange={this.onChange}
							type="password"
							placeholder="password"/>
					</label>
					<label>
						<input
							name="passwordConfirm"
							onChange={this.onChange}
							type="password"
							placeholder="confirm password"/>
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
