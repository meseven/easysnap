const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	createAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('user', userSchema);