// Import necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDMTBHZBppzMIePe10wvUvmDOlVz8h2mTE",
  authDomain: "vancour-internactional-school.firebaseapp.com",
  projectId: "vancour-internactional-school",
  storageBucket: "vancour-internactional-school.appspot.com", // ✅ Corrected storageBucket
  messagingSenderId: "340813261892",
  appId: "1:340813261892:web:87b029ecce46d22ce4e011",
  measurementId: "G-R40JF2L5TB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ Ensure authentication is properly initialized
export const database = getDatabase(app);
export default app;
