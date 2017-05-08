import express from 'express';
import mongoose from 'mongoose';
import routes from './Router';
import bodyParser from 'body-parser';
import path from 'path';

mongoose.connect(`mongodb://localhost:27017/api_data`, () => {
	console.log('Database connected...');
});

const application = express();
const viewPath = path.join(__dirname, 'views');
application.set('views', viewPath);

application.set('view engine', 'pug');

// Middleware
application.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	response.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

application.use(bodyParser.json());
application.use('/', routes);

export default application;