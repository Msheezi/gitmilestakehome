import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import RewardsReducer from "../reducers/rewardsReducer";
import { loadState } from './localStorage'



const configureStore = () => {
  const persistedState = loadState()
  return createStore(RewardsReducer, persistedState, applyMiddleware(logger));

}

 
export default configureStore;
