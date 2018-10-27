const Query = {
	user: async (parent, args, { User }) => {
		return await User.findById(args.id);
	},
	users: async (parent, args, { User }) => {
		return await User.find({}).sort({ 'createdAt': 'desc'})
	},
	activeUser: async (parent, args, { activeUser, User }) => {
		if (!activeUser) {
		  return null;
		}

		return await User.findOne({ username: activeUser.username });
	},

	snap: async (parent, args, { Snap }) => {
		return await Snap.findById(args.id);
	},
	snaps: async (parent, args, { Snap }) => {
		return await Snap.find({}).sort({ 'createdAt': 'desc'})
	},
};

module.exports = Query;