module.exports = {
	sayi: {
		subscribe: (parent, args, { pubsub }) => {

			let sayi = 5;

			setInterval(() => {
				sayi += 1;
				pubsub.publish('sayi', {
					sayi
				});
			}, 3000);

			return pubsub.asyncIterator('sayi');
		}
	}
};