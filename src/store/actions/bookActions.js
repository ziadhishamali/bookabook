export const addBook = (book) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();

        console.log(book.imageFile);
        let storageRef = firebase.storage().ref('images/' + book.imageFile.name);

        let task = storageRef.put(book.imageFile);
        task.on('state_changed', function progress(snapshot) {

            let prog = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            console.log(prog);
            if (prog === 100) {
                storageRef.getDownloadURL().then((url) => {
                    console.log("the url is: ", url);
                    let newBook = {...book};
                    delete newBook["imageFile"];
                    newBook["image"] = url;
                    firestore.collection('books').add({
                        ...newBook,
                        addedBy: "123654987",
                        addedAt: new Date()
                    }).then(() => {
                        dispatch({type: "ADD_BOOK", book});
                    }).catch(error => {
                        dispatch({type: "ADD_BOOK_ERROR", error});
                    })
                })
            }

        });
    }
}

export const changeFilter = (filterOption) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('books').orderBy(filterOption[0], filterOption[1]).onSnapshot((snapshot) => {
            let books = [];
            snapshot.forEach(doc => {
                let temp = {};
                temp.id = doc.id;
                temp = {...temp, ...doc.data()}
                books.push(temp);
            });
            dispatch({type: "CHANGE_FILTER", books});
        });

    }
}