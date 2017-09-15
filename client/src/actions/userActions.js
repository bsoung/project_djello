import { AsyncManager } from '../services';
import userConstants from '../constants/userConstants';

export function fetchAllUsers() {
	return dispatch => dispatch(AsyncManager.getRequest('/api/users', null, userConstants.GET_USERS_SUCCESS));
}

export function registerUser(credentials) {
	return dispatch => dispatch(AsyncManager.postRequest('/api/users', credentials, userConstants.SAVE_USERS_SUCCESS));
}

export function loginUser(credentials) {
	return dispatch => dispatch(AsyncManager.postRequest('/account/login', credentials, userConstants.LOGIN_USER_SUCCESS));
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

