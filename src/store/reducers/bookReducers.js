const initState = {
    
};

const bookReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            alert('You added a new book');
            break;
        case "CHANGE_FILTER":
            let newState = {...state, books: action.books};
            return newState;
        default:
    }
    return state;
}

export default bookReducer;