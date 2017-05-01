'use strict';

document.querySelector('.posts_btn')
	.addEventListener('click', getAllPosts);

function getAllPosts() {
	fetch('http://localhost:3000/api/posts')
		.then((resolve) => {
			resolve.json()
				.then((posts) => {
					const ulElement = document.createElement('ul');
					ulElement.setAttribute('class', 'list-group');	
					for (let i = 0; i < posts.data.length; i++) {
						console.log(posts.data[i]);
						const liElement = document.createElement('li');
						liElement.setAttribute('class', 'list-group-item');
						liElement.innerText = posts.data[i].title;
						ulElement.appendChild(liElement);
					}
					document.querySelector('#content')
						.appendChild(ulElement);
				});
		})
		.catch((error) => {
			console.log(`Some error with fetch ${error}`);
		});
}