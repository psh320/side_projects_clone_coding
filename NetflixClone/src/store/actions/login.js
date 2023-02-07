//action 설정
export const updateProfile = (data) => {
    return {
        type: 'UPDATE_PROFILE',
        data: data
    }
}

export const updateEmail = (data) => {
    return {
        type: 'UPDATE_EMAIL',
        data: data
    }
}

export const signIn = (data) => {
    return {
        type: 'SIGN_IN',
        data: data
    }
}

export const signOut = (data) => {
    return {
        type: 'SIGN_OUT',
        data: data
    }
}
