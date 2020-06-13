import {
    ADD_REWARD,
    DELETE_REWARD
} from '../actions/rewardActions'

const initialState = {
   rewards: []
}

const RewardsReducer = (state = initialState, action) => {
    Object.freeze(state)
    let newState
    switch (action.type) {
        case ADD_REWARD:
            newState = Object.assign({}, state)
            newState[action.reward.key] = action.reward
        return newState

        case DELETE_REWARD:
            newState = Object.assign({}, state)
            delete newState[action.reward.key]
            return newState
        default:
            return state
    }
}

export default RewardsReducer