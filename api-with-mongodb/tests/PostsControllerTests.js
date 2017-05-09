const should = require('should');
const sinon = require('sinon');

describe('Posts Controller Tests', () => {
	describe('Post', () => {
		it('Should not allow an empty title on post', () => {
			const Post = (post) => {this.save() = () => {}}
			const request = {
				body: {
					title: 'What'
				}
			}
			const response = {
				status: sinon.spy(),
				send: sinon.spy()
			}
			const postController = require('./../dist/controllers/PostController')(Post);
			postController.post(request, response);

			response.status.calledWith(400)
				.should.equal(true, 'Bad status ' + response.status.args[0][0]);

			response.send.calledWith('Title is required')
				.should.equal(true);
		})
	})
});