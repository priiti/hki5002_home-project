import db from './../models';

const commentController = {};

commentController.post = (request, response) => {
	const {
		text,
		userId,
		postId
	} = request.body;

	// Validation
	const comment = new db.Comment({
		text: text,
		_creator: userId,
		_post: postId
	});
	comment.save().then((newComment) => {
		db.Post.findByIdAndUpdate(
			postId,
			{ $push: {'_comments': newComment._id} }
		).then((existingPost) => {
			response.status(200).json({
				success: true,
				data: newComment,
				existingPost,
			});
		}).catch((err) => {
			response.status(500).json({
				message: err
			});
		});
	}).catch((err) => {
		response.status(500).json({
			message: err
		});
	});
};

export default commentController;