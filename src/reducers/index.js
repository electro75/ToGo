import { combineReducers } from 'redux'

const timerReducer = (timers=[], action) => {
    if(action.type === "ADD_TIMER") {
        
        return [...timers, action.payload]
    } else if(action.type === 'REMOVE_TIMER') {

        return timers.filter(timer => {
            return (timer.createdAt !== action.payload.createdAt)
        })
    }
    else {
        return [{
            name : '25th bday',
            timestamp : 1588809600,
            createdAt : 1588055104
        }]
    }
}

export default combineReducers({
    timers : timerReducer
})