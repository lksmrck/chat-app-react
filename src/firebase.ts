import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBd2jbORg9G9IiNCWa8L8lmeGC7SmzyrXc",
  authDomain: "react-course-1-1cfbc.firebaseapp.com",
  databaseURL: "https://react-course-1-1cfbc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-course-1-1cfbc",
  storageBucket: "react-course-1-1cfbc.appspot.com",
  messagingSenderId: "863210767289",
  appId: "1:863210767289:web:788bb3fb7e168cc5926c68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()