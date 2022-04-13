import dotenv from 'dotenv';
// import type express from 'express';
import Bugsnag from '@bugsnag/js';
import mongoose from 'mongoose';
import contactModule from '../../models/contact.model';
// Set process.env types
declare const process: {
	env: {
		[key: string]: string;
	};
};

// Retrieve the MongoDB URI
dotenv.config();
const { MONGODB_URI } = process.env;

/**
 * Initiate the connection to MongoDB
 */
mongoose.connect(MONGODB_URI);

/**
 * Send an error to BugSnag if mongoose can't connect to mongodb
 */
mongoose.connection.on('error', (err: any) => {
	Bugsnag.notify('Database connection error:', err);
});

/**
 * Handler for /contact form
 */
export async function post({ request }) {
	const data = await request.json();

	await contactModule.create(data);

	/*if (contactModule !== null) {
		console.log('contactModule', contactModule);
	}*/

	return {
		status: 201,
		headers: {
			success: true
		}
	};
}
