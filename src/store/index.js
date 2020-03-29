import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composer = compose(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
