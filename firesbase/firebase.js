import { initializeApp } from 'firebase/app'
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    sendEmailVerification
} from 'firebase/auth'

//ref = reference tp a collection
import {
    getDatabase,
    ref as firebaseDatabaseRef,
    set as firebaseSet,
    child,
    get,
    onValue,
} from 'firebase/database'

// Config Firebase
const firebaseConfig = {
    //get data from app/google-services.json
    apiKey: "AIzaSyBZ2mkiFuHZFZ9FhptJCxpwj9JwRCtmpHQ",
    authDomain: "trainingapp-ad8a8.firebaseapp.com",
    databaseURL: "https://trainingapp-ad8a8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "trainingapp-ad8a8",
    storageBucket: "trainingapp-ad8a8.appspot.com",
    appId: '1:346474859224:android:bca276bfb1a76df2e1a5ad',
    messagingSenderId: "346474859224"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const firebaseDatabase = getDatabase()
export {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    sendEmailVerification,
    child,
    get,
    onValue, //reload when online DB changed
}