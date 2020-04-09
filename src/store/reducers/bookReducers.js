const initState = {
    
};

const bookReducer = (state = initState, action) => {
    let newState;
    switch (action.type) {
        case "ADD_BOOK":
            alert('You added a new book');
            break;
        case "CHANGE_FILTER":
            newState = {...state, books: action.books, usersData: action.usersData};
            return newState;
        case "SEARCH_BOOK":
            newState = {...state, searchedBooks: action.searchedBooks};
            return newState;
        default:
    }
    return state;
}

export default bookReducer;