import express from 'express';
import mongoose from 'mongoose';
import routes from './Router';
import bodyParser from 'body-parser';

mongoose.connect('mongodb://localhost:27017/api_data', () => {
	console.log('Database connected...');
});

const application = express();

// Middleware
application.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	response.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
application.use(bodyParser.json());
application.use('/api', routes);

export default application;