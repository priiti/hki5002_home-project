const AboutController = {};

AboutController.get = (request, response) => {
	response.render('about');
};

export default AboutController;