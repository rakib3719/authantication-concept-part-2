// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANEHa7c5ALbh_AbO2w8qgZjm-owlKK8A0",
  authDomain: "fir-contextuse.firebaseapp.com",
  projectId: "fir-contextuse",
  storageBucket: "fir-contextuse.appspot.com",
  messagingSenderId: "985015335664",
  appId: "1:985015335664:web:2abb2be68acf652f8b2035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;