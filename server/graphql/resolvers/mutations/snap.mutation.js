module.exports = {
	createSnap: async (parent, { data: { user_id, text } }, { Snap, pubsub }) => {
		try{
			const snap = await new Snap({
				user_id,
				text
			}).save();

			pubsub.publish('sayi', {
				sayi: 12
			});

			return snap;
		}catch (e) {
			throw new Error(e);
		}
	}
};