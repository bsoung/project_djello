import { AsyncManager } from '../services';
import cardConstants from '../constants/cardConstants';

export function createNewCard(payload) {
	return dispatch => dispatch(AsyncManager.postRequest('/api/cards', payload, cardConstants.CREATE_CARD_SUCCESS));
}

export function setCurrentCards(payload) {
	return dispatch => { 
		dispatch(_setCurrentCardsLoading(true));
		return dispatch(AsyncManager.getRequest('/api/cards', payload, cardConstants.SET_CURRENT_CARDS_SUCCESS, () => {
			dispatch(_setCurrentCardsLoading(false));
		})) 
	};
}

export function deleteCurrentCard(id) {
	return dispatch => { 
		dispatch(_setCurrentCardsLoading(true));
		return dispatch(AsyncManager.getRequest(`/api/cards/delete/${id}`, null, cardConstants.DELETE_CURRENT_CARD_SUCCESS, () => {
			dispatch(_setCurrentCardsLoading(false));
		}))
	}
}

function _setCurrentCardsLoading(payload) {
	return {
		type: cardConstants.SET_CURRENT_CARDS_LOADING,
		payload
	}
}

