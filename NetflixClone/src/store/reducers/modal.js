const initialState = {
    modal: {
        isOpen: false,
        id: null
    }
}

const ModalReducer = (state = initialState, action) => {

    switch (action.type) {
        case "OPEN_MODAL" : {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isOpen: true
                } 
            }
        }
        case "CLOSE_MODAL" : {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isOpen: false
                } 
            }
        }
        case "UPDATE_ID" : {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    id: action.data
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

export default ModalReducer