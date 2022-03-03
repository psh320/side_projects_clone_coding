const INITIAL_STATE = {
    date: {startDate: null, endDate: null},
    guests: null,
    location: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHECK_IN":
            return {...state, date: action.payload}
        default:
            return state;
    }
}