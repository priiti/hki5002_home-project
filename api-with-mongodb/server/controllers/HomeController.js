class HomeController {
	constructor() {}
	
	get(request, response) {
		response.render('index',
				{message: 'Tere'}
			)
	}
}

export default new HomeController;