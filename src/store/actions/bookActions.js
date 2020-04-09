export const addBook = (book) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();

        let storageRef = firebase.storage().ref('images/' + book.imageFile.name);

        let task = storageRef.put(book.imageFile);
        task.on('state_changed', function progress(snapshot) {

            let prog = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            if (prog === 100) {
                storageRef.getDownloadURL().then((url) => {
                    console.log("the url is: ", url);
                    let newBook = {...book};
                    delete newBook["imageFile"];
                    newBook["image"] = url;
                    firestore.collection('books').add({
                        ...newBook,
                        title_norm: newBook.title.toLowerCase(),
                        author_norm: newBook.author.toLowerCase(),
                        addedBy: firebase.auth().currentUser.uid,
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

const getUsers = async (books, firestore, usersData) => {
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let userData = {};
        await firestore.collection('users').doc(book.addedBy).get().then(user => {
            userData.name = user.data().firstName + " " + user.data().lastName;
            userData.phone = user.data().phoneNumber;
            userData.email = user.data().email;
            usersData[book.addedBy] = {...userData};
        });
    }
}

export const ChangeGetUsers = (books) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        let usersData = {};
        await getUsers(books, firestore, usersData);

        dispatch({type: "CHANGE_FILTER", books, usersData});
    }
};


export const changeFilter = (filterOption) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('books').orderBy(filterOption[0], filterOption[1]).onSnapshot( async (snapshot) => {
            let books = [];
            snapshot.forEach(async (doc) => {
                let temp = {};
                temp.id = doc.id;
                temp = {...temp, ...doc.data()};
                books.push(temp);
            });

            let usersData = {};

            await getUsers(books, firestore, usersData);

            dispatch({type: "CHANGE_FILTER", books, usersData});
        });

    }
}

export const searchBook = (search) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        let bookRef = firestore.collection('books');
        let searchedBooks = [];
        let promise1 =  bookRef.where("title_norm", "==", search.toLowerCase())
        .get().then((snapshot) => {
            snapshot.forEach(doc => {
                let temp = {};
                temp.id = doc.id;
                temp = {...temp, ...doc.data()}
                searchedBooks.push(temp);
            });
        });

        let promise2 = bookRef.where("author_norm", "==", search.toLowerCase())
        .get().then((snapshot) => {
            snapshot.forEach(doc => {
                let temp = {};
                temp.id = doc.id;
                temp = {...temp, ...doc.data()}
                searchedBooks.push(temp);
            });
        });

        Promise.all([promise1, promise2]).then(() => {
            dispatch({type: "SEARCH_BOOK", searchedBooks});
        })
    }
};
