// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7np7Uvln6uCsou6KPi0kwUQDQqsHjeUw",
  authDomain: "book-haven-95434.firebaseapp.com",
  projectId: "book-haven-95434",
  storageBucket: "book-haven-95434.firebasestorage.app",
  messagingSenderId: "759254062305",
  appId: "1:759254062305:web:2f2409b9c12f556978d3a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;