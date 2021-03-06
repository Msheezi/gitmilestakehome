export const ADD_REWARD = "ADD_REWARD";
export const DELETE_REWARD = "DELETE_REWARD";
export const UPDATE_REWARD = "UPDATE_REWARD";
export const SAVE_STATE = "SAVE_STATE";

const placeNewReward = (reward) => ({
  type: ADD_REWARD,
  reward,
});

const deleteReward = (key) => ({
  type: DELETE_REWARD,
  key,
});

const moveReward = (reward, cat) => ({
  type: UPDATE_REWARD,
  reward,
  cat,
});

const resetState = () => ({
  type: "RESET_STATE",
});

const restoreState = (state) => ({
  type: "RESTORE",
  state,
});

export const clearState = () => resetState();
export const updateReward = (reward) => placeNewReward(reward);
export const removeReward = (key) => deleteReward(key);
export const movingReward = (reward, cat) => moveReward(reward, cat);
export const restoreFromStorage = (state) => restoreState(state);

// export const saveToLocal = (state) => saveState(state);
