import superagent from 'superagent';
import _ from "lodash";

const _get = async (url, params=null) => {
	try {
			const response = await superagent
				.get(url)
				.set('Accept', 'application/json')
				.query(params);

			if (response.body && response.body.confirmation !== 'success') {
				throw new Error(response.body.message);
			}

			return response.body;

		} catch (e) {
			throw e;
		}
}

const _post = async (url, params=null) => {
	try {
			const response = await superagent
				.post(url)
				.set('Accept', 'application/json')
				.send(params);


			if (response.body && response.body.confirmation !== 'success') {
				throw new Error(response.body.message);
			}

			return response.body;

		} catch (e) {
			throw e;
		}
}

export default {
	getRequest: (path, params, actionType, cb) => async dispatch => {
		try {
			const response = await _get(path, params);

			const payload = response.results || response.result || response.user;

			dispatch({
				type: actionType,
				payload: payload,
				params: params
			})

			if (_.isFunction(cb)) {
				cb(payload);
			}

			return response;

		} catch (e) {
			console.log(e, 'error');
			throw e;
		}
	},

	postRequest: (path, params, actionType, cb) => async dispatch => {
		try {
			const response = await _post(path, params);

			console.log(response, 'wat s the response hereeeee??')
			const payload = response.results || response.result || response.user;

			dispatch({
				type: actionType,
				payload: payload
			});

			if (_.isFunction(cb)) {
				cb(payload);
			}

			return response;

		} catch (e) {
			console.log(e, 'error');
			throw e;
		}
	}
}