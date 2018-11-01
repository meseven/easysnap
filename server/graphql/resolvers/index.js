// query resolvers
const Query = require('./queries/Query');
const Snap = require('./queries/Snap');
const User = require('./queries/User');

// mutation resolvers
const Mutation = require('./mutations/index');

// Subscription resolvers
const Subscription = require('./subscriptions/index');

module.exports = {
	Query,
	Snap,
	User,
	Mutation,
	Subscription
};