// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAwb-nH8DEAAqN6nn_1o0foZSqkNjpEwqU",
  authDomain: "mtechzilla-d2cea.firebaseapp.com",
  projectId: "mtechzilla-d2cea",
  storageBucket: "mtechzilla-d2cea.appspot.com",
  messagingSenderId: "613193999577",
  appId: "1:613193999577:web:250908825b003143980ac8",
  measurementId: "G-DK7VQQG0TT"
};


const app = initializeApp(firebaseConfig);

const auths=getAuth(app);

const provider = new GoogleAuthProvider();

export {app,auths,provider};
