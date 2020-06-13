import {combineReducers} from 'redux'
import undoableRewards from './rewardsReducer'


const rootReducer = combineReducers({
  rewards: undoableRewards,
});

export default rootReducer