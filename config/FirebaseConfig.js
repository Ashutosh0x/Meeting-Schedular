// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "meeting-scheduler-34971.firebaseapp.com",
  projectId: "meeting-scheduler-34971",
  storageBucket: "meeting-scheduler-34971.appspot.com",
  messagingSenderId: "184885689199",
  appId: "1:184885689199:web:4dd4b7224be56d3c09869a",
  measurementId: "G-82J67KQ37K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

