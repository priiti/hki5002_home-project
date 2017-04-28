// Security should be done
import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	createDate: {
		type: Date,
		default: Date.now()
	},
	isRemoved: {
		type: Boolean,
		default: false
	}
});

const User = mongoose.model('User', userSchema);
export default User;