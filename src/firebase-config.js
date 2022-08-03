// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6zz1sHadTNK4xa5ArLI7kdfADLw79mps",
  authDomain: "fakebook-10.firebaseapp.com",
  projectId: "fakebook-10",
  storageBucket: "fakebook-10.appspot.com",
  messagingSenderId: "126167634871",
  appId: "1:126167634871:web:bbc8941740312a02cb8e32",
  measurementId: "G-WBMWQDPEPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)