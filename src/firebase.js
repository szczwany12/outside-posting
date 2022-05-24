import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZZVQoqGRyZ4zIVbtP3NaYmT7hG8uYrUc",
    authDomain: "outside-posting.firebaseapp.com",
    projectId: "outside-posting",
    storageBucket: "outside-posting.appspot.com",
    messagingSenderId: "729379790001",
    appId: "1:729379790001:web:c30ed08e40984e11249690"
})


const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth}