module.exports = {
	snapAdded: {
		subscribe: (parent, args, { pubsub }) => {
			return pubsub.asyncIterator('snap added');
		}
	}
};