import {
    ADD_REWARD,
    DELETE_REWARD, UPDATE_REWARD
} from '../actions/rewardActions'

import undoable from 'redux-undo'

const initialState =  []

const RewardsReducer = (state = initialState, action) => {
    Object.freeze(state)
    let newState
    switch (action.type) {
        case ADD_REWARD:
            newState = state.concat([action.reward])
            // newState.push(action.reward)
            return newState
        case UPDATE_REWARD:
            // newState = Object.assign({}, state)
            const {name, bgcolor, key} = action.reward
            newState = state.filter(obj => obj.key !== key) 
            newState.push({
              name: name,
              key: key,
              location: `${name}${action.cat}`,
              bgcolor: bgcolor
            });
            
            return newState
        case DELETE_REWARD:
            newState = state.filter(obj => obj.key!== action.key )
            return newState
        default:
            return state
    }
}

const undoableRewards = undoable(RewardsReducer)

export default undoableRewards