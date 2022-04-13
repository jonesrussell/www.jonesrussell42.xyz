import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Ensure that the promise is resolved before the first request
	// It'll stay resolved for the time being
	const response = await resolve(event);
	return response;
};
