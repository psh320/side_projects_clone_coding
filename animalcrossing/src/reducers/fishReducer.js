export default (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_FISH':
			return action.payload;
		default:
			return state;
	}
		
}