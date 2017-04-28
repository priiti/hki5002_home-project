import express from 'express';
import homeController from './controllers/HomeController';
import userController from './controllers/UserController';
import postController from './controllers/PostController';
import commentController from './controllers/CommentController';
const routes = express();

// Get
routes.get('/', homeController.get);
routes.get('/posts', postController.getAll);

// Post
routes.post('/signup', userController.post);
routes.post('/post', postController.post);
routes.post('/comment', commentController.post);



export default routes;