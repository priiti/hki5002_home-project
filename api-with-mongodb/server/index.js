// index.js is only for running an instance of application
import application from './Application';

const PORT = 4000;

application.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});