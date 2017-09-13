import superagent from 'superagent';

export default {
	get: async (url, params=null) => {
		try {
			const response = await superagent
				.get(url)
				.query(params)
				.buffer();

			if (response.body && response.body.confirmation !== 'success') {
				throw new Error(response.body.message);
				return;
			}

			return response.body.result;

		} catch (e) {
			throw e
		}
	}
}