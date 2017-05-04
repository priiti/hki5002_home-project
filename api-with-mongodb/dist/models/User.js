'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; // Security should be done

_mongoose2.default.Promise = global.Promise;

var userSchema = new Schema({
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

var User = _mongoose2.default.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=User.js.map