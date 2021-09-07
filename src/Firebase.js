import firebase from "firebase/compat/app";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBLWAsfwkFE2GovIM7zLyilSrguhqaWbas",
  authDomain: "fir-react-auth-10181.firebaseapp.com",
  projectId: "fir-react-auth-10181",
  storageBucket: "fir-react-auth-10181.appspot.com",
  messagingSenderId: "97665973809",
  appId: "1:97665973809:web:cb786357c46c2c54e69f10",
  measurementId: "G-0L5C9CW98Y"
};

const app = firebase.initializeApp(firebaseConfig);
export default app;