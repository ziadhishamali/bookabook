import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCfu9_-R11LlgDD_mAoSIQ_tKFTC66Aabs",
    authDomain: "book-a-book-c17db.firebaseapp.com",
    databaseURL: "https://book-a-book-c17db.firebaseio.com",
    projectId: "book-a-book-c17db",
    storageBucket: "book-a-book-c17db.appspot.com",
    messagingSenderId: "7113660046",
    appId: "1:7113660046:web:e6cae22c1b212b81"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;