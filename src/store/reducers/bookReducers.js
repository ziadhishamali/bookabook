const initState = {
    
};

const bookReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            console.log("added a book", action.book);
            alert('YAY!! You added a new book');
            break;
        default:
    }
    return state;
}

export default bookReducer;