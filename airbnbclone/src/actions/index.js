export const selectCheckin = (date) => {
    return {
        type: "CHECK_IN",
        payload: date
    }
}

export const updateLocation = (location) => {
    return {
        type: "UPDATE_LOCATION",
        payload: location
    }
}

export const addAdult = () => {
    return {
        type: "ADD_ADULT"
    }
}

export const minusAdult = () => {
    return {
        type: "MINUS_ADULT"
    }
}

export const addChildren = () => {
    return {
        type: "ADD_CHILDREN"
    }
}

export const minusChildren = () => {
    return {
        type: "MINUS_CHILDREN"
    }
}

export const addBaby = () => {
    return {
        type: "ADD_BABY"
    }
}

export const minusBaby = () => {
    return {
        type: "MINUS_BABY"
    }
}

export const addPet = (pet) => {
    return {
        type: "ADD_PET"
    }
}

export const minusPet = (pet) => {
    return {
        type: "MINUS_PET"
    }
}