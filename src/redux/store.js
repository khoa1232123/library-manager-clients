import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import booksReducer from "./reducers/booksReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  books: booksReducer,
  // data: dataReducer,
  // UI: uiReducer
});

const enhancers = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

const store = createStore(reducers, initialState, enhancers);

export default store;
