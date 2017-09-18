import { AsyncManager } from '../services';
import listConstants from '../constants/listConstants';

export function createNewList(payload) {
	return dispatch => dispatch(AsyncManager.postRequest('/api/lists', payload, listConstants.CREATE_LIST_SUCCESS));
}

export function setUserLists(payload) {
	return dispatch => dispatch(AsyncManager.getRequest('/api/lists/', payload, listConstants.SET_LISTS_SUCCESS));
}

// export function setCurrentLists(id) {
// 	return dispatch => dispatch(AsyncManager.getRequest(`/api/lists/${id}`, null, boardConstants.SET_CURRENT_LIST_SUCCESS));
// }

