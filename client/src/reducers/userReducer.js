import userConstants from '../constants/userConstants';

const initialState = {
	user: null,
	loading: false,
	error: null
};

export default (state = initialState, action = {}) => {
	let updated = Object.assign({}, state);

	switch (action.type) {
		case userConstants.SET_USER_SUCCESS:
			updated.user = action.payload;
			updated.error = null;
			return updated;

		case userConstants.SET_USER_LOADING:
			updated.loading = action.payload;
			return updated;

		case userConstants.SET_USER_FAIL:
			updated.error = action.payload;

		default:
			return updated;
	}
};