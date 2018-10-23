const user = require('./user.mutation');
const snap = require('./snap.mutation');

const Mutation = {
	...user,
	...snap,
};

module.exports = Mutation;