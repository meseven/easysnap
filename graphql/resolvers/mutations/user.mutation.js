const bcrypt = require('bcrypt');

module.exports = {
	createUser: async (parent, { data: { username, password } }, { User }) => {
		const user = await User.findOne({ username });

		if (user) {
		  throw new Error('User already exists.');
		}

		return await new User({
			username,
			password
		}).save();
	},

	signIn: async (parent, { data: { username, password } }, { User }) => {
		const user = await User.findOne({ username });
		if (!user) {
		  throw new Error("User does not exists!");
		}

		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
		  throw new Error("Wrong password!");
		}

		return { token: 'test token ljalsd' }
	}
};