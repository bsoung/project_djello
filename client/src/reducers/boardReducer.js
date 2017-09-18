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
		
		case boardConstants.CREATE_BOARD_SUCCESS:
			updated.board = action.payload;
			updated.boards.push(action.payload);
			return updated;

		case boardConstants.SET_BOARDS_SUCCESS:
			updated.boards = action.payload;
			return updated;

		default:
			return updated;
	}
};