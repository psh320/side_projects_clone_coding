export const openModal = (data) => {
    return {
        type: 'OPEN_MODAL',
        data: data
    }
}

export const closeModal = (data) => {
    return {
        type: 'CLOSE_MODAL',
        data: data
    }
}

export const updateId = (data) => {
    return {
        type: 'UPDATE_ID',
        data: data
    }
}

