const initialState = {
	loading: false,
	pageNumber: 1,
	numberOfPages: 0,
	filterByYear: '',
	sortBy: 'asc', //or 'asc
	totalResults: 0,
	resultsPerPage: 20,
	launches: [],
	message: ""
}

const reducer = (state = initialState, action) => {
	switch( action.type ){
		case 'UPDATE_DATA':
		return {
			...state,
			launches: action.payload,
			totalResults: action.total,
			numberOfPages:  action.numberOfPages,
			message: action.message
		}
		case 'CHANGE_PAGE_NUMBER':
		return {
			...state,
			pageNumber: action.pageNumber,
		}
		case 'CHANGE_SORT':
		return {
			...state,
			sortBy: action.sort,
		}
		case 'CHANGE_FILTER':
		return {
			...state,
			filterByYear: action.year,
		}
		case 'TOGGLE_LOADING':
		return {
			...state,
			loading: !state.loading,
		}
		default:
	}
	return state;
};

export default reducer;
