import firebase from "firebase/app";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLWAsfwkFE2GovIM7zLyilSrguhqaWbas",
  authDomain: "fir-react-auth-10181.firebaseapp.com",
  projectId: "fir-react-auth-10181",
  storageBucket: "fir-react-auth-10181.appspot.com",
  messagingSenderId: "97665973809",
  appId: "1:97665973809:web:cb786357c46c2c54e69f10",
  measurementId: "G-0L5C9CW98Y"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);