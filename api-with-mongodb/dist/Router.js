'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express2.default)();

// Get
routes.get('/', function (request, response) {
	response.send('Hello');
});

exports.default = routes;
//# sourceMappingURL=Router.js.map