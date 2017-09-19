import { AsyncManager } from '../services';
import userConstants from '../constants/userConstants';

// export function fetchAllUsers() {
// 	return dispatch => dispatch(AsyncManager.getRequest('/api/users', null, userConstants.GET_USERS_SUCCESS));
// }

export function registerUser(credentials) {
	return dispatch => { 
		dispatch(_setUserLoading(true));
		return dispatch(AsyncManager.postRequest('/api/users', credentials, userConstants.SET_USER_SUCCESS, () => {
			dispatch(_setUserLoading(false));
		})); 
	}
}

export function loginUser(credentials) {
	return dispatch => {
		dispatch(_setUserLoading(true));
		return dispatch(AsyncManager.postRequest('/account/login', credentials, userConstants.SET_USER_SUCCESS, () => {
			dispatch(_setUserLoading(false));
		})); 
	}
}

export function logoutUser(credentials) {
	return dispatch => dispatch(AsyncManager.getRequest('/account/logout', null, userConstants.SET_USER_SUCCESS));
}

export function checkCurrentUser() {
	return dispatch => dispatch(AsyncManager.getRequest('/account/currentuser', null, userConstants.SET_USER_SUCCESS));
}

function _setUserLoading(payload) {
	return {
		type: userConstants.SET_USER_LOADING,
		payload
	}
}


// export function getUsersRequest() {
// 	return {
// 		type: userConstants.GET_USERS_REQUEST
// 	};
// }

// export function getUsersSuccess(payload) {
// 	return {
// 		type: userConstants.GET_USERS_SUCCESS,
// 		payload
// 	};
// }

// export function getUsersFailure(payload) {
// 	return {
// 		type: userConstants.GET_USERS_FAILURE,
// 		payload
// 	};
// }

// export function saveUsersSuccess(payload) {
// 	return {
// 		type: userConstants.SAVE_USERS_SUCCESS,
// 		payload
// 	};
// }

// export function saveUsersFailure(payload) {
// 	return {
// 		type: userConstants.SAVE_USERS_FAILURE,
// 		payload
// 	};
// }

// export const getUsers = () => async dispatch => {
// 	dispatch(getUsersRequest());
// 	try {
// 		const response = await APIManager.get('api/users');
// 		dispatch(getUsersSuccess(response));
// 	} catch (e) {
// 		dispatch(getUsersFailure(e));
// 	}
// };


