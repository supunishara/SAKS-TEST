import {createStore, applyMiddleware } from 'redux';
import reducers from '../Reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


  //creating middleware variable
  let middlewares = [logger, thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = createStore(reducers, applyMiddleware(...middlewares));
  export default store;