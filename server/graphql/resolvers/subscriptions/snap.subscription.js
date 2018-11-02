const { withFilter } = require('apollo-server');

module.exports = {
	snap: {
		subscribe: withFilter(
			(parent, args, { pubsub }) => {
				return pubsub.asyncIterator('snap added');
			},
			(payload, variables) => {
				return variables.userId ? String(payload.snap.user_id) === variables.userId : true ;
			}
		)
	}
};