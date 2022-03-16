export const handleResponse = async (response) => {
	return await response.json();
};

export const handleError = (status) => {
	const message = `An error has occured: ${status}`;
	throw new Error(message);
};
