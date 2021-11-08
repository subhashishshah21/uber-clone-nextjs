// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7JjsqNKLEGrnAx0dKKNZDcNXmbRNv3lA",
  authDomain: "uber-next-clone-13c9f.firebaseapp.com",
  projectId: "uber-next-clone-13c9f",
  storageBucket: "uber-next-clone-13c9f.appspot.com",
  messagingSenderId: "1078135590024",
  appId: "1:1078135590024:web:1c3554a13a736a56afe33d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
