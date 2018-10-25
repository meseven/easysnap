import React, {Component} from 'react';
import { Mutation } from 'react-apollo';

import { CREATE_USER } from '../../queries';

import Error from '../Error';

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

	onSubmit = (e, createUser) => {
		e.preventDefault();
		createUser().then(data => console.log(data))
	};

	render() {
		const { username, password } = this.state;
		return (
			<div>
				<Mutation mutation={CREATE_USER} variables={ { username, password } }>
					{ (createUser, { loading, error } ) => (
						<form
							onSubmit={ e => {
								this.onSubmit(e, createUser)
							} }
							className="user-form">
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

							{ loading && <div>loading...</div> }
							{ error && <Error error={error} />}
						</form>
					) }
				</Mutation>
			</div>
		);
	}
}

export default Join;
