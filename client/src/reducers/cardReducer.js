import cardConstants from '../constants/cardConstants';

const initialState = {
	card: null,
	cards: [],
	loading: false
};

export default (state = initialState, action = {}) => {
	let updated = Object.assign({}, state);

	switch (action.type) {
		
		case cardConstants.CREATE_CARD_SUCCESS:
			console.log(action.payload, 'do we get here??')
			updated.cards.push(action.payload);
			return updated;

		case cardConstants.SET_CARDS_SUCCESS:
			updated.cards = action.payload;
			return updated;

		case cardConstants.SET_CURRENT_CARD_SUCCESS:
			updated.card = action.payload;
			return updated;

		case cardConstants.SET_CURRENT_CARD_LOADING:
			updated.loading = action.payload;
			return updated;

		default:
			return updated;
	}
};