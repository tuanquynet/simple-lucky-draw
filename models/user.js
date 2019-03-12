const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types } = mongoose.Schema;

const UserSchema = new Schema({
	name: { type: Types.String },
	email: { type: Types.String, required: true },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = {
	UserSchema,
	UserModel,
};