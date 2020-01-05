export const signin = (user) => {
    return async(dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        console.log("user to sign in: ", user);
        await firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(snapshot => {
            let currentUser = firebase.auth().currentUser;
            localStorage.setItem('uid', currentUser.uid);
            dispatch({type: "SIGNIN", user});
        }).catch(error => {
            console.log(error.message);
            localStorage.setItem('uid', undefined);
            dispatch({type: "ERROR", error});
        })
    }
}

export const signup = (user) => {
    return async(dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        console.log("user to sign up: ", user);
        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(() => {
            let currentUser = firebase.auth().currentUser;
            localStorage.setItem('uid', currentUser.uid);
            firestore.collection('users').doc(currentUser.uid).set(user).then(() => {
                dispatch({type: "SIGNUP", user});
            })
        }).catch(error => {
            localStorage.removeItem('uid');
            dispatch({type: "ERROR", error})
        })
    }
}