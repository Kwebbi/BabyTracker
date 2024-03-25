// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTqUuVFLikR5nXGtWcBIaB7Tov0iTZuGM",
  authDomain: "baby-tracker-c9d75.firebaseapp.com",
  projectId: "baby-tracker-c9d75",
  storageBucket: "baby-tracker-c9d75.appspot.com",
  messagingSenderId: "582498097273",
  appId: "1:582498097273:web:9e44b8d5ad528296135ca8",
  measurementId: "G-Q7MWZSVK7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);