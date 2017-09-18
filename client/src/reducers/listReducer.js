import listConstants from '../constants/listConstants';

const initialState = {
	lists: [],
	isFetching: false,
	error: null
};

export default (state = initialState, action = {}) => {
	let updated = Object.assign({}, state);

	switch (action.type) {
		
		case listConstants.CREATE_LIST_SUCCESS:
			updated.lists.push(action.payload);
			return updated;

		// case boardConstants.SET_BOARDS_SUCCESS:
		// 	console.log(typeof action.payload, 'what is this payload in board')
		// 	updated.boards = action.payload;
		// 	return updated;

		// case boardConstants.SET_CURRENT_BOARD_SUCCESS:
		// 	updated.board = action.payload;
		// 	return updated;

		default:
			return updated;
	}
};