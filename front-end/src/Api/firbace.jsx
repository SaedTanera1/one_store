// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmGtKNGJUYa1V-5yMXC6dt7a6AV7Aulqs",
  authDomain: "one-store-9494b.firebaseapp.com",
  projectId: "one-store-9494b",
  storageBucket: "one-store-9494b.firebasestorage.app",
  messagingSenderId: "1043267803254",
  appId: "1:1043267803254:web:a8fd839274a1adf6a2a757",
  measurementId: "G-967VR8JJZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
