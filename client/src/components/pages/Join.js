import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import { Mutation } from 'react-apollo';

import { CREATE_USER } from '../../queries';

import Error from '../Error';

const initialState = {
	username: '',
	password: '',
	passwordConfirm: ''
};

class Join extends Component {
	state = {
		...initialState
	};

	onChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		})
	};

	formValidate = () => {
		const { username, password, passwordConfirm } = this.state;

		return (!username || !password || !passwordConfirm || password !== passwordConfirm);
	};

	resetState = () => {
		this.setState({
			...initialState
		})
	};

	onSubmit = (e, createUser) => {
		e.preventDefault();
		createUser().then(async ({ data }) => {
			console.log(data);
			localStorage.setItem('token', data.createUser.token);
			await this.props.refetch();
			this.resetState();
			this.props.history.push('/');
		})
	};

	render() {
		const { username, password, passwordConfirm } = this.state;
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
									value={username}
									placeholder="username"/>
							</label>
							<label>
								<input
									name="password"
									onChange={this.onChange}
									type="password"
									value={password}
									placeholder="password"/>
							</label>
							<label>
								<input
									name="passwordConfirm"
									onChange={this.onChange}
									type="password"
									value={passwordConfirm}
									placeholder="confirm password"/>
							</label>
							<label>
								<button disabled={ loading || this.formValidate() }>Join</button>
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

export default withRouter(Join);
