class HomeController {
	constructor() {}
	
	get(request, response) {
		response.render('index',
				{message: 'Tere, oled avalehel'}
			)
	}
}

export default new HomeController;