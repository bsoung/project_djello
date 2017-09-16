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
	console.log(url, 'what is this?')
	try {
			const response = await superagent
				.post(url)
				.set('Accept', 'application/json')
				.send(params);

			console.log(response, 'what is the response?')

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
			const payload = response.result || response;

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
			throw e;
		}
	},

	postRequest: (path, params, actionType, cb) => async dispatch => {
		try {
			const response = await _post(path, params);
			const payload = response.result || response;

			localStorage.setItem('userToken', response.token);

			dispatch({
				type: actionType,
				payload: payload
			});

			if (_.isFunction(cb)) {
				cb(payload);
			}

			return response;

		} catch (e) {
			throw e;
		}
	}
}