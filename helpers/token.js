const jwt = require('jsonwebtoken');

const token = {
	generate: ({ username }, expiresIn) => {
		return jwt.sign({ username }, process.env.SECRET_KEY , { expiresIn });
	}
};

module.exports = token;