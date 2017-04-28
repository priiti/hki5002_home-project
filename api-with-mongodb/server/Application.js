import express from 'express';
import mongoose from 'mongoose';
import routes from './Router';
import bodyParser from 'body-parser';

mongoose.connect('mongodb://localhost:27017/api_data', () => {
	console.log('Database connected...');
});

const application = express();

// Middleware
application.use(bodyParser.json());
application.use('/api', routes);

export default application;