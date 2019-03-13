import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './reducers';
import RootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, composeWithDevTools(
                applyMiddleware(sagaMiddleware),
  ));

sagaMiddleware.run(RootSaga);

export default store;