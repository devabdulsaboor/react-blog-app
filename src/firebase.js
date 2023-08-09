import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyDH6QPUNKTZs7WkM58qhf76rNnhDObZl1g",
 authDomain: "blogproject-14111.firebaseapp.com",
 projectId: "blogproject-14111",
 storageBucket: "blogproject-14111.appspot.com",
 messagingSenderId: "1027855936714",
 appId: "1:1027855936714:web:e7dad782a0743714e01833"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();