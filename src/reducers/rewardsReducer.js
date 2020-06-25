import {
  ADD_REWARD,
  DELETE_REWARD,
  UPDATE_REWARD,
} from "../actions/rewardActions";

import undoable from "redux-undo";

const initialState = {};

const RewardsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case ADD_REWARD:
      newState = Object.assign({}, state);

      newState[action.reward.key] = action.reward;
      return newState;
    case UPDATE_REWARD:
      const { key } = action.reward;

      newState = { ...state, ...state.key, [key]: { ...action.reward } };
      newState[key].location = `${action.reward.name}${action.cat}`;

      return newState;
    case DELETE_REWARD:
      newState = Object.assign({}, state);
      delete newState[action.key];

      return newState;
    case "RESTORE":
      newState = Object.assign({}, action.state);
      //   console.log(action.state.rewards);
      return newState;
    // case "SAVE_STATE":
    //   return;
    // // return value for this.
    default:
      return state;
  }
};

const undoableRewards = undoable(RewardsReducer);

export default undoableRewards;
