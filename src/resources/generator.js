import { handleResponse, handleError } from './handlers';

const url = new URL(`${process.env.REACT_APP_URL}/gossips`);

export const getRumors = async (data) => {
	url.search = new URLSearchParams(data).toString();
	const response = await fetch(url);
	if (response.ok) {
		return handleResponse(response);
	} else {
		handleError(response.status);
	}
};
