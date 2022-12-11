const timer = (state = false , action) => {
    switch (action.type) {
        case "START": 
            return state = true
        case "STOP":
            return state = false
        default:
            return state
            break;
    }
}

export default timer;