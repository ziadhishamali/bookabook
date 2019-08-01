import img from '../../images/got.jpg';

const initState = {
    books: [
        {id: 1, title: "Game Of Thrones", img: img, description: "A Song of ice and fire", author: "George R.R. Martin", price: "200EGP", addedby: "Ziad Hisham"},
        {id: 2, title: "Game Of Thrones", img: img, description: "A Song of ice and fire", author: "George R.R. Martin", price: "300EGP", addedby: "Ziad Hisham"},
        {id: 3, title: "Game Of Thrones", img: img, description: "A Song of ice and fire", author: "George R.R. Martin", price: "400EGP", addedby: "Ziad Hisham"},
        {id: 4, title: "Game Of Thrones", img: img, description: "A Song of ice and fire", author: "George R.R. Martin", price: "500EGP", addedby: "Ziad Hisham"},
        {id: 5, title: "Game Of Thrones", img: img, description: "A Song of ice and fire", author: "George R.R. Martin", price: "600EGP", addedby: "Ziad Hisham"},
        {id: 6, title: "Game Of Thrones", img: img, description: "A Song of ice and fire", author: "George R.R. Martin", price: "700EGP", addedby: "Ziad Hisham"},
        {id: 7, title: "Game Of Thrones", img: img, description: "A Song of ice and fire", author: "George R.R. Martin", price: "800EGP", addedby: "Ziad Hisham"},
        {id: 8, title: "Game Of Thrones", img: img, description: "A Song of ice and fire", author: "George R.R. Martin", price: "900EGP", addedby: "Ziad Hisham"},
    ],
};

const bookReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            console.log("added a book", action.book);
            break;
        default:
    }
    return state;
}

export default bookReducer;