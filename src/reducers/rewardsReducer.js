import {
    ADD_REWARD,
    DELETE_REWARD, UPDATE_REWARD
} from '../actions/rewardActions'

const initialState = {rewards: []}
const RewardsReducer = (state = initialState, action) => {
    Object.freeze(state)
    let newState
    switch (action.type) {
        case ADD_REWARD:
            newState = Object.assign({}, state)
            // console.log("state:", state, "newState.rewards:",newState.rewards, state,action.reward)
             newState.rewards.push(action.reward)
        return newState
        case UPDATE_REWARD:
            newState = Object.assign({}, state)
            newState.rewards.forEach(obj => {
                if (obj.key === action.key){
                    obj.location = `${action.id}${action.cat}`
                }
            })
            return newState
        case DELETE_REWARD:
            newState = Object.assign({}, state)
            newState.rewards = newState.rewards.filter(obj => obj.key!== action.key )
            return newState
        default:
            return state
    }
}

export default RewardsReducer