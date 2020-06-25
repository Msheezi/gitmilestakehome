import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import rootReducer from "../reducers/rootReducer";
import { loadState } from "./localStorage";

const configureStore = (initialState = {}) => {
  // const persistedState = loadState()
  // return createStore(rootReducer, persistedState, applyMiddleware(logger));
  return createStore(rootReducer, initialState, applyMiddleware(logger));
};

export default configureStore;
