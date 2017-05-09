class NotFound {
	constrcutor() {}
	get(request, response) {
		response.render('404', {title: '404', message: 'Lehte ei leitud'});
	}
}

export default new NotFound;