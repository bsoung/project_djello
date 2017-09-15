import userConstants from '../constants/userConstants';
import _ from 'lodash';

const initialState = {
	user: null,
	users: [],
	isFetching: false,
	error: null
};

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case userConstants.GET_USERS_REQUEST:
			updated.isFetching = true;

			return updated;

		case userConstants.GET_USERS_SUCCESS:
			updated.users = action.payload;
			updated.isFetching = false;
			return updated;

		case userConstants.GET_USERS_FAILURE:
			updated.users = [];
			updated.isFetching = false;
			updated.error = action.payload;

			return updated;

		case userConstants.SAVE_USERS_SUCCESS:
			updated.users = updated.users.push(action.payload);
			return updated;

		case userConstants.SAVE_USERS_FAILURE:
			updated.users = [];
			updated.isFetching = false;
			updated.error = action.payload;

			return updated;

		case userConstants.LOGIN_USERS_SUCCESS:
			updated.user = action.payload;
			return updated;

		default:
			return updated;
	}
};