
export const ADD_REWARD = "ADD_REWARD"
export const DELETE_REWARD = "DELETE_REWARD"
export const UPDATE_REWARD = "UPDATE_REWARD"

 const addReward = (reward) => ({
    type: ADD_REWARD,
    reward
})

 const deleteReward = (key) => ({
  type: DELETE_REWARD,
  key,
});

const moveReward = (reward, cat) => ({
  type: UPDATE_REWARD,
  reward,
  cat
});

export const updateReward = (reward) => addReward(reward)
export const removeReward = (key) => deleteReward(key)
export const movingReward = (reward, cat) => moveReward(reward, cat);
