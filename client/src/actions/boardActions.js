import { AsyncManager } from '../services';
import boardConstants from '../constants/boardConstants';

export function createNewBoard(data) {
	return dispatch => dispatch(AsyncManager.postRequest('/api/boards', data, boardConstants.CREATE_BOARD_SUCCESS));
}