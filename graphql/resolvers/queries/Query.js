const Query = {
	user: async (parent, args, { User }) => {
		return await User.findById(args.id);
	},
	users: async (parent, args, { User }) => {
		return await User.find({}).sort({ 'createdAt': 'desc'})
	},

	snap: async (parent, args, { Snap }) => {
		return await Snap.findById(args.id);
	}
};

module.exports = Query;