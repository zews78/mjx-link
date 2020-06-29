import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCq1if5OIjfBEPCpFjb-eDtcdBMThSkdpw",
    authDomain: "handloom-684c0.firebaseapp.com",
    databaseURL: "https://handloom-684c0.firebaseio.com",
    projectId: "handloom-684c0",
    storageBucket: "handloom-684c0.appspot.com",
    messagingSenderId: "869343706848",
    appId: "1:869343706848:web:162f72ad69776dfc921a85",
    measurementId: "G-ZXNEF9W4DW"
});

const db = firebaseApp.firestore();

export { db };