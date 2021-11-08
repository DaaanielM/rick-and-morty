import axios from 'axios';
import env from '../config/env';

export async function getCharacters(page = 1, search = '') {
	try {
		const { data } = await axios.request({
			baseURL: env.baseURL,
			url: 'character/',
			method: 'get',
			params: {
				page,
				name: search,
			},
		});
		return data;
	} catch (error) {
		console.log(error);
		return false;
	}
}
