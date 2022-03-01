// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBku6QGajSQxtSu_a8y_3QFDIbJv69Uvws",
  authDomain: "time-7fa43.firebaseapp.com",
  projectId: "time-7fa43",
  storageBucket: "time-7fa43.appspot.com",
  messagingSenderId: "134536868823",
  appId: "1:134536868823:web:9f05c7c8ea8fcf2fd29192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()

export {
  db,
  auth
}