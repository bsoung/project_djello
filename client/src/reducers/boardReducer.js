import boardConstants from '../constants/boardConstants';

const initialState = {
	board: null,
	boards: [],
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

		case boardConstants.CREATE_BOARD_SUCCESS:
			updated.board = action.payload;
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