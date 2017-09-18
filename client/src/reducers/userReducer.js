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
		case userConstants.SET_USER_SUCCESS:
			updated.user = action.payload;
			return updated;

		default:
			return updated;
	}
};