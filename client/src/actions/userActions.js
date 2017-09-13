import { APIManager } from '../services';
import userConstants from '../constants/userConstants';

export function getStocksRequest() {
	return {
		type: userConstants.GET_USERS_REQUEST
	};
}

export function getStocksSuccess(payload) {
	return {
		type: userConstants.GET_USERS_SUCCESS,
		payload
	};
}

export function getStocksFailure(payload) {
	return {
		type: userConstants.GET_USERS_FAILURE,
		payload
	};
}

export const getStocks = () => dispatch => {
	dispatch(getStocksRequest());

	try {
		const response = APIManager.get('api/users');
		dispatch(getStocksSuccess(response));
	} catch (e) {
		dispatch(getStocksFailure(e));
	}
};