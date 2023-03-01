// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOgf9Us6djC_snXy7AwFnQmjAF2TpKc_0",
  authDomain: "maqueta-login.firebaseapp.com",
  projectId: "maqueta-login",
  storageBucket: "maqueta-login.appspot.com",
  messagingSenderId: "635105899091",
  appId: "1:635105899091:web:cfc90cc8869b215b9b0ca6",
  measurementId: "G-HX0DPGDN8W",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
