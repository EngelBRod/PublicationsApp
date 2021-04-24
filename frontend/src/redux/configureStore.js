import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Publications from './reducers/publicationsReducer';
import Authors from './reducers/authorsReducer';

// Combining and configuring all the stores
const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      publications: Publications,
      authors: Authors,
    }),
    applyMiddleware(thunk, logger),
  );
  return store;
};

export default ConfigureStore;
