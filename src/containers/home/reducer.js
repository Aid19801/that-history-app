import * as actions from './constants';

const initialState = {
    isLoading: false,
    error: null,
}

const homePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.HOME_LOADING:
            return {
                ...state,
                isLoading: true,
            }
            break;
        case actions.HOME_LOADED:
            return {
                ...state,
                isLoading: false,
            }
            break;
        case actions.HOME_FAILED:
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