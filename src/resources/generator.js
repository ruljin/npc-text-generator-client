const handleResponse = async (response) => {
	return await response.json();
};

const handleError = (status) => {
	const message = `An error has occured: ${status}`;
	throw new Error(message);
};

export const getRumors = async () => {
	const response = await fetch('https://swapi.dev/api/films');
	if (response.ok) {
		return handleResponse(response);
	} else {
		handleError(response.status);
	}
};

// https://dmitripavlutin.com/javascript-fetch-async-await/
