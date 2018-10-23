module.exports = {
	createSnap: async (parent, { data: { user_id, text } }, { Snap }) => {
		return await new Snap({
			user_id,
			text
		}).save();
	}
};