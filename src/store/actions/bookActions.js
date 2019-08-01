export const addBook = (book) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('books').add({
            ...book,
            addedBy: "123654987",
            addedAt: new Date()
        }).then(() => {
            dispatch({type: "ADD_BOOK", book});
        }).catch(error => {
            dispatch({type: "ADD_BOOK_ERROR", error});
        })
    }
}