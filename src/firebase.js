import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOyaPkkCACf85Xzd7qwK-CkJOne1MpsOU",
    authDomain: "linkedin-clone-aary.firebaseapp.com",
    projectId: "linkedin-clone-aary",
    storageBucket: "linkedin-clone-aary.appspot.com",
    messagingSenderId: "480773422829",
    appId: "1:480773422829:web:dce2132a9ac14704be96e4",
    measurementId: "G-JN64K2DWMX"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };