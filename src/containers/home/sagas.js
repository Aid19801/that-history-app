import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './constants';

export function* watcherHomePage() {
    console.log('watcher homepage fired...');
    yield takeLatest(actions.HOME_LOADING, workerHomePage);
}

export function* workerHomePage() {
    console.log('worker home page fired...');
}