import express from 'express';
import HomeController from './controllers/HomeController';
import userController from './controllers/UserController';
import postController from './controllers/PostController';
import commentController from './controllers/CommentController';
import NotFound from './controllers/NotFound';
import path from 'path';

const routes = express.Router();

// Get
routes.get('/', HomeController.get);
routes.get('/posts', postController.getAll);

// Post
routes.post('/signup', userController.post);
routes.post('/post', postController.post);
routes.post('/comment', commentController.post);

routes.get('*', NotFound.get);


export default routes;