import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import staticReducers from '../reducers';

let middleware = applyMiddleware(thunk);

function configureStore(initialState) {
  const store = createStore(createReducer(), initialState, middleware);

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducers = (asyncReducers) => {
    store.asyncReducers = { ...store.asyncReducers, ...asyncReducers };
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  store.detachReducers = (reducers) => {
    const reducerNamesLst = Object.keys(reducers);
    if (reducerNamesLst?.length) {
      reducerNamesLst.forEach((reducerName) => {
        delete store.asyncReducers[reducerName];
      });
      store.replaceReducer(createReducer(store.asyncReducers));
    }
  };

  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

const store = configureStore();
export default store;
