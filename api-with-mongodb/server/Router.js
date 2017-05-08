import express from 'express';
import HomeController from './controllers/HomeController';
import userController from './controllers/UserController';
import PostController from './controllers/PostController';
import commentController from './controllers/CommentController';
import AboutController from './controllers/AboutController';
import NotFound from './controllers/NotFound';

const routes = express.Router();

// Get
routes.get('/', HomeController.get);
routes.get('/posts', PostController.getAll);
routes.get('/posts/:postid', PostController.getById);
routes.get('/about', AboutController.get);

// Post
routes.post('/signup', userController.post);
routes.post('/post', PostController.post);
routes.post('/comment', commentController.post);

routes.get('*', NotFound.get);

export default routes;