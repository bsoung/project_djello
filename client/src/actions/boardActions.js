import { AsyncManager } from '../services';
import boardConstants from '../constants/boardConstants';

export function createNewBoard(payload) {
	return dispatch => dispatch(AsyncManager.postRequest('/api/boards', payload, boardConstants.CREATE_BOARD_SUCCESS));
}

// export function fetchAllBoards(data) {
// 	return dispatch => dispatch(AsyncManager.getRequest('/api/boards', null, boardConstants.GET_BOARDS_SUCCESS));
// }

export function setUserBoards(payload) {
	return {
		type: boardConstants.SET_BOARDS_SUCCESS,
		payload
	};
}