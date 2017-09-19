import listConstants from '../constants/listConstants';

const initialState = {
	lists: [],
	loading: false
};

export default (state = initialState, action = {}) => {
	let updated = Object.assign({}, state);

	switch (action.type) {
		
		case listConstants.CREATE_LIST_SUCCESS:
			updated.lists.push(action.payload);
			return updated;

		case listConstants.SET_CURRENT_LISTS_SUCCESS:
			updated.lists = action.payload;
			console.log(updated.lists, 'wtf is this shit')
			return updated;

		case listConstants.SET_CURRENT_LISTS_LOADING:
			updated.loading = action.payload;
			return updated;

		default:
			return updated;
	}
};