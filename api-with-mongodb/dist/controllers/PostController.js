'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postController = {};

postController.post = function (request, response) {
	var _request$body = request.body,
	    title = _request$body.title,
	    text = _request$body.text,
	    link = _request$body.link,
	    userId = _request$body.userId;

	// Validation should be done here

	var post = new _models2.default.Post({
		title: title,
		text: text,
		link: link,
		_creator: userId
	});

	post.save().then(function (newPost) {
		return response.status(200).json({
			success: true,
			data: newPost
		});
	}).catch(function (err) {
		return response.status(500).json({
			message: err
		});
	});
};

postController.getAll = function (request, response) {
	_models2.default.Post.find({}).populate({
		path: '_creator',
		select: 'username createDate-_id'
	}).populate({
		path: '_comments',
		select: 'text _creator',
		match: { 'isRemoved': false }
	}).then(function (posts) {
		return response.status(200).json({
			success: true,
			data: posts
		});
	}).catch(function (err) {
		return response.status(500).json({
			message: err
		});
	});
};

exports.default = postController;
//# sourceMappingURL=PostController.js.map