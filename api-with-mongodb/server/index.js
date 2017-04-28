// index.js is only for running an instance of application

import application from './Application';

application.listen(3000, () => {
	console.log('http://localhost:3000');
});