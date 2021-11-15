import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBhHWr9OZZ30sIQBcgg0SZ4725eThv5XOA",
    authDomain: "vue-firebase-sites-226d9.firebaseapp.com",
    projectId: "vue-firebase-sites-226d9",
    storageBucket: "vue-firebase-sites-226d9.appspot.com",
    messagingSenderId: "643513677723",
    appId: "1:643513677723:web:6ec1e2bf1830a8f947133e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }