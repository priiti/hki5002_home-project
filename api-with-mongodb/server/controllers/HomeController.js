class HomeController {
	constructor() {}
	
	get(request, response) {
		return response.render('index', {
			title: 'Avaleht',
			message: 'Tere, oled avalehel'
			}
		)
	}
}

export default new HomeController;