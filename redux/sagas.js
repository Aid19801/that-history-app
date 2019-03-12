import { all } from 'redux-saga/effects';
import { watcherHomePage } from '../src/containers/home/sagas';

function* RootSaga() {
    yield all([
        watcherHomePage(),
    ])
}


export default RootSaga