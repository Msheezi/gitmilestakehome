import {combineReducers} from 'redux'
import RewardsReducer from './rewardsReducer'


const rootReducer = combineReducers({
    Rewards: RewardsReducer
})

export default rootReducer