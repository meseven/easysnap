module.exports = {
	sayi: {
		subscribe: (parent, args, { pubsub }) => {
			return pubsub.asyncIterator('sayi');
		}
	}
};