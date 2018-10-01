import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import history from '../lib/history';

const store = createStore(
    connectRouter(history)(rootReducer),
    applyMiddleware(thunk, logger, routerMiddleware(history))
);

export default store;
