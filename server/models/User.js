const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

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
	createdAt: {
		type: Date,
		default: Date.now
	}
});

userSchema.pre('save', function(next) {
	if (!this.isModified('password')) {
	  return next()
	}

	bcrypt.hash(this.password, 10)
		.then(hash => {
			this.password = hash;
			next();
		});
});

module.exports = mongoose.model('user', userSchema);
