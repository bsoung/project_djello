import userConstants from '../constants/userConstants';

const initialState = {
	user: null,
	loading: false
};

export default (state = initialState, action = {}) => {
	let updated = Object.assign({}, state);

	switch (action.type) {
		case userConstants.SET_USER_SUCCESS:
			updated.user = action.payload;
			return updated;

		case userConstants.SET_USER_LOADING:
			updated.loading = action.payload;
			return updated;

		default:
			return updated;
	}
};