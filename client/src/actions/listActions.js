import { AsyncManager } from '../services';
import listConstants from '../constants/listConstants';

export function createNewList(payload) {
	console.log(payload, 'payload??')
	return dispatch => dispatch(AsyncManager.postRequest('/api/lists', payload, listConstants.CREATE_LIST_SUCCESS));
}

export function setCurrentLists(payload) {
	return dispatch => { 
		dispatch(_setCurrentListsLoading(true));
		return dispatch(AsyncManager.getRequest('/api/lists', payload, listConstants.SET_CURRENT_LISTS_SUCCESS, () => {
			dispatch(_setCurrentListsLoading(false));
		})) 
	};
}

function _setCurrentListsLoading(payload) {
	return {
		type: listConstants.SET_CURRENT_LISTS_LOADING,
		payload
	}
}

