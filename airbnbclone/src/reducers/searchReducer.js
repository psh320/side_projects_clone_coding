const INITIAL_STATE = {
    date: {startDate: null, endDate: null},
    adult: 0, 
    children: 0, 
    baby: 0, 
    pet: 0,
    location: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHECK_IN":
            return {...state, date: action.payload};
        case "UPDATE_LOCATION" :
            return {...state, location: action.payload}
        case "ADD_ADULT" :
            return {...state, adult: state.adult+1}
        case "MINUS_ADULT" :
            return {...state, adult: state.adult-1}
        case "ADD_CHILDREN" :
            return {...state, children: state.children+1}
        case "MINUS_CHILDREN" :
            return {...state, children: state.children-1}
        case "ADD_BABY" :
            return {...state, baby: state.baby+1}
        case "MINUS_BABY" :
            return {...state, baby: state.baby-1}
        case "ADD_PET" :
            return {...state, pet: state.pet+1}
        case "MINUS_PET" :
            return {...state, pet: state.pet-1}
        default:
            return state;
    }
}