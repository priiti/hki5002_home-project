const homeController = {};

homeController.get = (request, response) => {
	response.json({
		title: "Avaleht",
		message: "Oled avalehel!"
	});
};

export default homeController;