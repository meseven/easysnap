const { gql } = require("apollo-boost");

// user mutations

export const CREATE_USER = gql`
	mutation($username: String!, $password: String!) {
		createUser(data: { username: $username, password: $password }) {
			token
		}
	}
`;

export const SIGNIN_USER = gql`
	mutation($username: String! $password: String!){
		signIn(data: {
			username: $username
			password: $password
		}){
			token
		}
	}
`;

export const GET_ACTIVE_USER = gql`
	query{
		activeUser{
			id
			username
			createdAt
			snaps{
				text
				createdAt
			}
		}
	}
`;

// Homepage
export const GET_SNAPS = gql`
	query{
		snaps{
			id
			text
			createdAt
			user{
				id
				username
			}
		}
	}
`;

export const ADD_SNAP = gql`
	mutation($text: String! $user_id: ID!){
		createSnap(data: {
			text: $text
			user_id: $user_id
		}){
			id
			text
			createdAt
			user{
				id
				username
			}
		}
	}
`;

// subscriptions

export const USER_CREATED = gql`
	subscription{
		user{
			id
			username
		}
	}
`;

export const SNAP_CREATED = gql`
	subscription($userId: ID){
		snap(userId: $userId){
			id
			text
			createdAt
			user{
				id
				username
			}
		}
	}
`;