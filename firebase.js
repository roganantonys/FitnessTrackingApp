// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCfTb4t3utD5uQjSAv4Nkd38egNU-MFDQ",
  authDomain: "fitnessapp-d00c3.firebaseapp.com",
  projectId: "fitnessapp-d00c3",
  storageBucket: "fitnessapp-d00c3.appspot.com",
  messagingSenderId: "137278532987",
  appId: "1:137278532987:web:9f9b70f19df068c15761de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};