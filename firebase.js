// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"; 

const firebaseApp = firebase.initializeApp({

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDacS2orTxNMH1LMonfPOz36ILxcL8Xx44",
    authDomain: "todo-app-99201.firebaseapp.com",
    projectId: "todo-app-99201",
    storageBucket: "todo-app-99201.appspot.com",
    messagingSenderId: "420122890222",
    appId: "1:420122890222:web:ac9e0c9aa1e36cba80c8ff",
    measurementId: "G-KN787PJP33"
});

const db = firebaseApp.firestore();
export default db;