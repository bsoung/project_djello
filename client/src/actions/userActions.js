import { APIManager } from '../services';
import userConstants from '../constants/userConstants';

export function getUsersRequest() {
	return {
		type: userConstants.GET_USERS_REQUEST
	};
}

export function getUsersSuccess(payload) {
	return {
		type: userConstants.GET_USERS_SUCCESS,
		payload
	};
}

export function getUsersFailure(payload) {
	return {
		type: userConstants.GET_USERS_FAILURE,
		payload
	};
}

export const getUsersFromAPI = () => async dispatch => {
	dispatch(getUsersRequest());

	try {
		const response = await APIManager.get('api/users');
		dispatch(getUsersSuccess(response));
	} catch (e) {
		dispatch(getUsersFailure(e));
	}
};