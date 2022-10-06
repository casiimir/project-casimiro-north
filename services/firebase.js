// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCABffJe9PBx84yBgDXfSlet10doXJe_Gc",
  authDomain: "project-north-1e510.firebaseapp.com",
  projectId: "project-north-1e510",
  storageBucket: "project-north-1e510.appspot.com",
  messagingSenderId: "894341876453",
  appId: "1:894341876453:web:6041f6ecb952176ba5e20c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();
export const loginGoogle = () => signInWithRedirect(auth, provider);