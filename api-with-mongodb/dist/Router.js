'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _HomeController = require('./controllers/HomeController');

var _HomeController2 = _interopRequireDefault(_HomeController);

var _UserController = require('./controllers/UserController');

var _UserController2 = _interopRequireDefault(_UserController);

var _PostController = require('./controllers/PostController');

var _PostController2 = _interopRequireDefault(_PostController);

var _CommentController = require('./controllers/CommentController');

var _CommentController2 = _interopRequireDefault(_CommentController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express2.default)();

// Get
routes.get('/', _HomeController2.default.get);
routes.get('/posts', _PostController2.default.getAll);

// Post
routes.post('/signup', _UserController2.default.post);
routes.post('/post', _PostController2.default.post);
routes.post('/comment', _CommentController2.default.post);

exports.default = routes;
//# sourceMappingURL=Router.js.map