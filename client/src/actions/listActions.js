import { AsyncManager } from '../services';
import listConstants from '../constants/listConstants';

export function createNewList(payload) {
	return dispatch => dispatch(AsyncManager.postRequest('/api/lists', payload, listConstants.CREATE_LIST_SUCCESS));
}

// export function setCurrentLists(payload) {
// 	return dispatch => { 
// 		dispatch(_setCurrentListsLoading(true));
// 		return dispatch(AsyncManager.getRequest('/api/lists', payload, listConstants.SET_CURRENT_LISTS_SUCCESS, () => {
// 			dispatch(_setCurrentListsLoading(false));
// 		})) 
// 	};
// }

export function setCurrentListFromBoard(id) {
	return dispatch => {
		dispatch(_setCurrentListsLoading(true));
		return dispatch(AsyncManager.getRequest(`/api/boards/${id}`, null, listConstants.SET_CURRENT_LISTS_SUCCESS, () => {
			dispatch(_setCurrentListsLoading(false));
		}))
	}
}

export function setNewPositionLists(positionObj) {
	return {
		type: listConstants.UPDATE_LIST_POSITIONS,
		payload: positionObj
	}
}


function _setCurrentListsLoading(bool) {
	return {
		type: listConstants.SET_CURRENT_LISTS_LOADING,
		payload: bool
	}
}

