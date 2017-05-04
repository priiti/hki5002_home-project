"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var homeController = {};

homeController.get = function (request, response) {
	response.json({
		title: "Avaleht",
		message: "Oled avalehel!"
	});
};

exports.default = homeController;
//# sourceMappingURL=HomeController.js.map