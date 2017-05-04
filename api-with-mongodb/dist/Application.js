'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Router = require('./Router');

var _Router2 = _interopRequireDefault(_Router);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost:27017/api_data', function () {
	console.log('Database connected...');
});

var application = (0, _express2.default)();

// Middleware
application.use(function (request, response, next) {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	response.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
application.use(_bodyParser2.default.json());
application.use('/api', _Router2.default);

exports.default = application;
//# sourceMappingURL=Application.js.map