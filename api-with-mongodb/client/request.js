'use strict';

document.querySelector('.posts_btn')
	.addEventListener('click', getAllPosts);

function getAllPosts() {
	fetch('http://localhost:3000/api/posts')
		.then((resolve) => {
			resolve.json()
				.then((posts) => {
					const divElement = document.createElement('div');
					divElement.setAttribute('class', 'panel panel-default');

					const ulElement = document.createElement('ul');
					ulElement.setAttribute('class', 'list-group');	
					for (let i = 0; i < posts.data.length; i++) {
						console.log(posts.data[i]);
						const liElement = document.createElement('li');
						const paragraph = document.createElement('p');
						liElement.setAttribute('class', 'list-group-item');
						liElement.innerText = posts.data[i].title;
						paragraph.textContent = 
							posts.data[i].text != undefined ? posts.data[i].text : posts.data[i].link;
						ulElement.appendChild(liElement);
						ulElement.appendChild(paragraph);
					}
					divElement.appendChild(ulElement);
					document.querySelector('#content')
						.appendChild(divElement);
				});
		})
		.catch((error) => {
			console.log(`Some error with fetch ${error}`);
		});
}


// <div class="panel panel-default">
//   <div class="panel-heading">
//     <h3 class="panel-title">Panel title</h3>
//   </div>
//   <div class="panel-body">
//     Panel content
//   </div>
// </div>