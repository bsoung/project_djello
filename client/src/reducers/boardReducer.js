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
			updated.boards.push(action.payload);
			return updated;

		case boardConstants.SET_BOARDS_SUCCESS:
			console.log(typeof action.payload, 'what is this payload in board')
			updated.boards = action.payload;
			return updated;

		case boardConstants.SET_CURRENT_BOARD_SUCCESS:
			updated.board = action.payload;
			return updated;

		default:
			return updated;
	}
};