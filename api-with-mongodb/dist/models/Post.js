'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


_mongoose2.default.Promise = global.Promise;

var postSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	link: {
		type: String
	},
	text: {
		type: String
	},
	isRemoved: {
		type: Boolean,
		default: false
	},
	createDate: {
		type: Date,
		default: Date.now()
	},
	_creator: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	_comments: [{
		type: Schema.ObjectId,
		ref: 'Comment'
	}]
});

var Post = _mongoose2.default.model('Post', postSchema);
exports.default = Post;
//# sourceMappingURL=Post.js.map