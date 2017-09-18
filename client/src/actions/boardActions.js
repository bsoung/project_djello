import { AsyncManager } from '../services';
import boardConstants from '../constants/boardConstants';

export function createNewBoard(payload) {
	return dispatch => dispatch(AsyncManager.postRequest('/api/boards', payload, boardConstants.CREATE_BOARD_SUCCESS));
}

export function setUserBoards(payload) {
	return dispatch => dispatch(AsyncManager.getRequest('/api/boards/', payload, boardConstants.SET_BOARDS_SUCCESS));
}

export function setCurrentBoard(id) {
	return dispatch => dispatch(AsyncManager.getRequest(`/api/boards/${id}`, null, boardConstants.SET_CURRENT_BOARD_SUCCESS));
}

