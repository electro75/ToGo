import { combineReducers } from 'redux'

const timerReducer = (timers=[], action) => {
    if(action.type === "ADD_TIMER") {
        return [...timers, action.payload]
    } else {
        return timers
    }
}

export default combineReducers({
    timers : timerReducer
})