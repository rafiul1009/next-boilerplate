const initialState = {
    checkRedux: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_REDUX': {
            return {
                ...state,
                checkRedux: action.payload.checkRedux,
            }
        }
       
        default: return state
    }
}

export default authReducer;