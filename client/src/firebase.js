// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1241f.firebaseapp.com",
  projectId: "mern-estate-1241f",
  storageBucket: "mern-estate-1241f.appspot.com",
  messagingSenderId: "435648471064",
  appId: "1:435648471064:web:cfa555d52a3d52d5da636d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);