// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbuC_6v4FQpHkL9S1hwD6KDCDb1D0G90M",
  authDomain: "react-authentication-aa066.firebaseapp.com",
  projectId: "react-authentication-aa066",
  storageBucket: "react-authentication-aa066.appspot.com",
  messagingSenderId: "1091530623353",
  appId: "1:1091530623353:web:ebae3c5bcc80ade8c4c7a8",
  measurementId: "G-Q478WDBXJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;