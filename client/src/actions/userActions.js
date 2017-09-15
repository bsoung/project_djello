import { AsyncManager } from '../services';
import userConstants from '../constants/userConstants';
import _ from 'lodash';

// const getRequest = (path, params, actionType, cb) => {
// 	return async (dispatch) => {
// 		try {
// 			const response = await APIManager.get(path, params);

// 			const payload = response.results || response.result || response.user;

// 			dispatch({
// 				type: actionType,
// 				payload: payload,
// 				params: params
// 			})

// 			if (_.isFunction(cb)) {
// 				cb(payload);
// 			}

// 			return response;

// 		} catch (e) {
// 			console.log(e, 'error');
// 			throw e;
// 		}
// 	}	
// }

export function fetchAllUsers() {
	return dispatch => dispatch(AsyncManager.getRequest('/api/users', null, userConstants.GET_USERS_SUCCESS));
}

export function registerUser(credentials) {
	return dispatch => dispatch(AsyncManager.postRequest('/api/users', credentials, userConstants.SAVE_USERS_SUCCESS));
}

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

export function saveUsersSuccess(payload) {
	return {
		type: userConstants.SAVE_USERS_SUCCESS,
		payload
	};
}

export function saveUsersFailure(payload) {
	return {
		type: userConstants.SAVE_USERS_FAILURE,
		payload
	};
}

// export const getUsers = () => async dispatch => {
// 	dispatch(getUsersRequest());
// 	try {
// 		const response = await APIManager.get('api/users');
// 		dispatch(getUsersSuccess(response));
// 	} catch (e) {
// 		dispatch(getUsersFailure(e));
// 	}
// };

// export const saveUsers = (params) => async dispatch => {
// 	try {
// 		console.log('saving', params)
// 		const response = await APIManager.post('api/users', params);
// 		dispatch(saveUsersSuccess(response));
// 	} catch (e) {
// 		console.log('error???')
// 		dispatch(saveUsersFailure(e));
// 	}
// }

// export const loginUsers = (params) => async dispatch => {
// 	try {
// 		console.log('saving', params)
// 		const response = await APIManager.post('api/users', params);
// 		dispatch(saveUsersSuccess(response));
// 	} catch (e) {
// 		console.log('error???')
// 		dispatch(saveUsersFailure(e));
// 	}
// }

