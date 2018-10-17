const Query = {
	user: async (parent, args, { User }) => {
		return await User.findById(args.id);
	}
};

module.exports = Query;