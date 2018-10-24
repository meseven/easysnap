const { gql } = require("apollo-boost");

// user mutations

export const CREATE_USER = gql`
	mutation($username: String!, $password: String!) {
		createUser(data: { username: $username, password: $password }) {
			token
		}
	}
`;
