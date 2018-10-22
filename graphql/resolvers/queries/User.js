const User = {
	snaps: async (parent, args, { Snap }) => {
		return await Snap.find({ user_id: parent._id });
	}
};

module.exports = User;