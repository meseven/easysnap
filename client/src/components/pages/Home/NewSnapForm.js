import React, {Component} from 'react';
import {ADD_SNAP, GET_SNAPS} from "../../../queries";
import {Mutation} from "react-apollo";

class NewSnapForm extends Component {
	state = {
		text: '',
		user_id: ''
	};

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	formValidate = () => {
		const {text} = this.state;

		return !text;
	};

	componentDidMount() {
		const {session} = this.props;

		if (session && session.activeUser) {
			this.setState({
				user_id: this.props.session.activeUser.id
			});
		}
	}

	onSubmit = (e, addSnap) => {
		e.preventDefault();

		if (!this.formValidate()) {
			this.setState({
				text: ''
			});

			addSnap()
				.then(({data}) => {

				})
		}
	};

	updateCache = (cache, {data: {createSnap}}) => {
		const {snaps} = cache.readQuery({
			query: GET_SNAPS
		});

		cache.writeQuery({
			query: GET_SNAPS,
			data: {
				snaps: [createSnap, ...snaps]
			}
		})
	};

	render() {
		const {session} = this.props;

		const optimisticResponse = {
			__typename: "Mutation",
			createSnap: {
				__typename: "Snap",
				id: Math.round(Math.random() * -200000),
				text: this.state.text,
				createdAt: new Date(),
				user: {
					__typename: "User",
					...session.activeUser
				}
			}
		};

		return (
			<div>
				<Mutation
					mutation={ADD_SNAP}
					variables={{...this.state}}
					//refetchQueries={[{ query: GET_SNAPS }]}
					update={this.updateCache}
					optimisticResponse={optimisticResponse}
				>
					{
						(addSnap, {loading, error}) => (
							<form
								onSubmit={e => {
									this.onSubmit(e, addSnap);
								}}
							>
								<input
									className="add-snap__input"
									type="text"
									name="text"
									value={this.state.text}
									onChange={this.onChange}
									disabled={!(session && session.activeUser)}
									placeholder={session && session.activeUser ? 'add snap' : 'please login for add a new snap!'}/>
							</form>
						)
					}
				</Mutation>
			</div>
		);
	}
}

export default NewSnapForm;
