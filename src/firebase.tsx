// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbtRMNtTzdEpIKmXHPQMPy8LrwvO5ppf8",
  authDomain: "snackshot-7144b.firebaseapp.com",
  projectId: "snackshot-7144b",
  storageBucket: "snackshot-7144b.appspot.com",
  messagingSenderId: "588798460475",
  appId: "1:588798460475:web:ca71d4447cfb84b01e921e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}