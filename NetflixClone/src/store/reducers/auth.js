const initialState ={
	isSignedIn: null,
	userId: null
}

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SIGN_IN":
			return {...state, isSignedIn: true, userId: action.payload};
		case "SIGN_OUT":
			return {...state, isSignedIn: false, userId: null};
		default:
			return state;
	}
};

export default AuthReducer
