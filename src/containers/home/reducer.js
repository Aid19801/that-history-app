
const initialState = {
    isLoading: false,
    error: null,
}

const homePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'HOME_LOADING':
            return {
                ...state,
                isLoading: true,
            }
            break;
        case 'HOME_LOADED':
            return {
                ...state,
                isLoading: false,
            }
            break;
        case 'HOME_FAILED':
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
            break;


        default:
            return state;
            break;
    }
}

export default homePageReducer;