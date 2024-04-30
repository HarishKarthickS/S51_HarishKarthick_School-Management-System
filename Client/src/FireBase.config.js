// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8mQ1ry3r9aLCAD-cRBKb_Oh8fMf9MEJA",
  authDomain: "curiosity-la.firebaseapp.com",
  projectId: "curiosity-la",
  storageBucket: "curiosity-la.appspot.com",
  messagingSenderId: "802909690833",
  appId: "1:802909690833:web:017b19856e7ba9bf5c1ef0",
  measurementId: "G-H864Z3G1ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth


