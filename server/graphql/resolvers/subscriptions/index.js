const snap = require('./snap.subscription');
const user = require('./user.subscription');

const Subscription = {
	...snap,
	...user
};

module.exports = Subscription;