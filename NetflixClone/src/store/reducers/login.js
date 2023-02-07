//초기 상태값 설정
const initialState = {
    user: {
        email: "",
        isSignedIn: false,
        token: null,
        id: null,
        profile: null,
        membership: null
    }
}


//리듀서 설정
const LoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'UPDATE_PROFILE': {
            return {
                ...state,
                user: {
                    ...state.user,
                    profile: action.data
                }
            }
        }
        case 'UPDATE_EMAIL': {
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.data
                }
            }
        }
        case 'SIGN_IN': {
            return {
                ...state,
                user: {
                    ...state.user,
                    token: action.data.jwt,
                    isSignedIn: true,
                    id: action.data.accountIdx,
                    membership: action.data.membership
                }
            }
        }
        case 'SIGN_OUT': {
            return {
                ...state,
                user: {
                    email: "",
                    token: null,
                    isSignedIn: false,
                    id: null,
                    profile: null,
                    membership: null
                }
            }
        }
        default: {
            return {
                ...state
            }
        }
    }

}

export default LoginReducer