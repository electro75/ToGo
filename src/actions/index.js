export const addTimer = (timer) => {
    return {
        type : "ADD_TIMER",
        payload : timer
    }
}

export const removeTimer = (timer) => {
    return {
        type : "REMOVE_TIMER",
        payload : timer
    }
}