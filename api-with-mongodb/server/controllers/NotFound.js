class NotFound {
	constrcutor() {}
	get(request, response) {
		response.render('404');
	}
}

export default new NotFound;