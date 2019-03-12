import { combineReducers } from 'redux';
import homePageReducer from '../src/containers/home/reducer';

const RootReducer = combineReducers({
    homePage: homePageReducer,
})

export default RootReducer;