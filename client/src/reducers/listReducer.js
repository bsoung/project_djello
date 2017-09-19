import listConstants from '../constants/listConstants';
import {arrayMove} from 'react-sortable-hoc';


const initialState = {
	lists: [],
	loading: false
};

export default (state = initialState, action = {}) => {
	let updated = Object.assign({}, state);

	switch (action.type) {

		// this.setState({
  //     items: arrayMove(this.state.items, oldIndex, newIndex),
  //   });
		
		case listConstants.CREATE_LIST_SUCCESS:
			updated.lists.push(action.payload);
			return updated;

		case listConstants.SET_CURRENT_LISTS_SUCCESS:
			updated.lists = action.payload.lists;

			return updated;

		case listConstants.SET_CURRENT_LISTS_LOADING:
			updated.loading = action.payload;
			return updated;

		case listConstants.UPDATE_LIST_POSITIONS:
			const { oldIndex, newIndex } = action.payload;
			const newArr = arrayMove(updated.lists, oldIndex, newIndex)
			// console.log(newArr, 'new arr')
			updated.lists = newArr
			console.log(updated.lists, 'changed?')
			return updated;

		default:
			return updated;
	}
};