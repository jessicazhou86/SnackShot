// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"

// // detect auth state
// onAuthStateChanged(auth, user => {
//   if (user !== null) {
//     console.log('logged in!');
//   } else {
//     console.log('No user');
//   }
// })

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyBbtRMNtTzdEpIKmXHPQMPy8LrwvO5ppf8",
  authDomain: "snackshot-7144b.firebaseapp.com",
  projectId: "snackshot-7144b",
  storageBucket: "snackshot-7144b.appspot.com",
  messagingSenderId: "588798460475",
  appId: "1:588798460475:web:ca71d4447cfb84b01e921e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);