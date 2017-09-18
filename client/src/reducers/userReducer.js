import userConstants from '../constants/userConstants';

const initialState = {
	user: null,
	isAuthenticated: false,
	users: [],
	isFetching: false,
	error: null
};

export default (state = initialState, action = {}) => {
	let updated = Object.assign({}, state);

	switch (action.type) {
		// case userConstants.GET_USERS_REQUEST:
		// 	updated.isFetching = true;

		// 	return updated;

		// case userConstants.GET_USERS_SUCCESS:
		// 	updated.users = action.payload;
		// 	updated.isFetching = false;
		// 	return updated;

		// case userConstants.GET_USERS_FAILURE:
		// 	updated.users = [];
		// 	updated.isFetching = false;
		// 	updated.error = action.payload;

		// 	return updated;

		case userConstants.SET_USER_SUCCESS:
			updated.user = action.payload;
			console.log(updated, 'reducer')
			return updated;

		// case userConstants.SAVE_USER_FAILURE:
		// 	updated.users = [];
		// 	updated.isFetching = false;
		// 	updated.error = action.payload;

		// 	return updated;


		default:
			return updated;
	}
};