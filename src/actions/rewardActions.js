
export const ADD_REWARD = "ADD_REWARD"
export const UNDO_REWARD = "UNDO_REWARD"
export const REDO_REWARD = "REDO_REWARD"
export const DELETE_REWARD = "DELETE_REWARD"

 const addReward = (reward) => ({
    type: ADD_REWARD,
    reward
})
//  const undoReward = (reward) => ({
//     type: UNDO_REWARD,
//     reward
// })
//  const redoReward = (reward) => ({
//     type: REDO_REWARD,
//     reward
// })
 const deleteReward = (key) => ({
  type: DELETE_REWARD,
  key,
});

export const updateReward = (reward) => dispatchEvent(addReward(reward))
export const removeReward = (key) => dispatchEvent(deleteReward(key))