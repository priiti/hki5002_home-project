'use strict';


fetch('http://localhost:3000/api/posts')
	.then((resolve) => {
		resolve.json()
			.then((data) => {
				console.log(data);
			});
	})
	.catch((error) => {
		console.log(`Some error with fetch ${error}`);
	});