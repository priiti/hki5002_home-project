import db from './../models';

const PostController = {};

PostController.post = (request, response) => {
	const {title, text, link, userId} = request.body;

	// Validation should be done here

	const post = new db.Post({
		title: title,
		text: text,
		link: link,
		_creator: userId
	});

	post.save().then((newPost) => {
		return response.status(200).json({
			success: true,
			data: newPost
		});
	}).catch((err) => {
		return response.status(500).json({
			message: err
		});
	});
};

PostController.getAll = (request, response) => {
	db.Post.find({}).populate({
		path: '_creator',
		select: 'username createDate-_id'
	}).populate({
		path: '_comments',
		select: 'text _creator',
		match: { 'isRemoved': false }
	}).then((posts) => {
		let postData = [];
		posts.forEach((item) => {
			let data = {};
			data.id = item._id;
			data.title = item.title;
			data.content = `${item.text.substring(0, 100)}...`;
			postData.push(data);	
		})
		return postData;
	}).then((postData) => {
			return response.render('posts', {postData});
			console.log(postData);
	}).catch((err) => {
		return response.status(500).json({
			message: err
		});
	});
};

PostController.getById = (request, response) => {
	let postId = request.params.postid;
	db.Post.findOne({_id: postId})
		.then((singlePost) => {
			return response.render('single_post.pug', {
				post: singlePost
			});
		})
		.catch((error) => {
			throw new Error(error);
		})
};

export default PostController;