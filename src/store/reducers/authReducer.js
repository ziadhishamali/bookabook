const initState = {};

const authReducer = (state = initState, action) => {
    let newState;
    switch(action.type) {
        case "SIGNIN":
            newState = {...state, user: action.user};
            return newState;
        case "SIGNUP":
            newState = {...state, user: action.user};
            return newState;
        case "ERROR":
            newState = {...state, user: undefined};
            return newState;
        default:
    }
    return state;
}

export default authReducer;