import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware';

import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'
import client from './client';

export default function configureStore(preloadedState) {
  const middlewares = [
    axiosMiddleware(client),
    loggerMiddleware,
    thunkMiddleware,
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}