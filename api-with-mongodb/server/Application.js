import express from 'express';
import mongoose from 'mongoose';
import routes from './Router';
import bodyParser from 'body-parser';
import path from 'path';
// mongodb://<dbuser>:<dbpassword>@ds115131.mlab.com:15131/app-data
mongoose.connect(`mongodb://app:FooBazWTF!@ds115131.mlab.com:15131/app-data`, () => {
	console.log('Database connected...');
});

const application = express();
application.use(express.static(path.join(__dirname, '../', 'public')));
const viewPath = path.join(__dirname, 'views');
application.set('views', viewPath);

application.set('view engine', 'pug');

// Middleware
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({extended: false}));

application.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	response.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

application.use('/', routes);

export default application;