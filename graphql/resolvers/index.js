// query resolvers
const Query = require('./queries/Query');
const Snap = require('./queries/Snap');

// mutation resolvers
const Mutation = require('./mutations/index');

module.exports = {
	Query,
	Snap,
	Mutation
};