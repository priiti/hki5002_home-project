'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentController = {};

commentController.post = function (request, response) {
	var _request$body = request.body,
	    text = _request$body.text,
	    userId = _request$body.userId,
	    postId = _request$body.postId;

	// Validation

	var comment = new _models2.default.Comment({
		text: text,
		_creator: userId,
		_post: postId
	});
	comment.save().then(function (newComment) {
		_models2.default.Post.findByIdAndUpdate(postId, { $push: { '_comments': newComment._id } }).then(function (existingPost) {
			response.status(200).json({
				success: true,
				data: newComment,
				existingPost: existingPost
			});
		}).catch(function (err) {
			response.status(500).json({
				message: err
			});
		});
	}).catch(function (err) {
		response.status(500).json({
			message: err
		});
	});
};

exports.default = commentController;
//# sourceMappingURL=CommentController.js.map