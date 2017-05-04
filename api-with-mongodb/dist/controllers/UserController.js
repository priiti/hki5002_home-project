'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _models = require('./../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userController = {};

userController.post = function (request, response) {
	var _request$body = request.body,
	    username = _request$body.username,
	    password = _request$body.password;

	// Validation

	var user = new _models2.default.User({
		username: username,
		password: password
	});
	user.save().then(function (newUser) {
		response.status(200).json({
			success: true,
			data: newUser
		});
	}).catch(function (err) {
		response.status(500).json({
			message: err
		});
	});
};

exports.default = userController;
//# sourceMappingURL=UserController.js.map