// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsYTW1PksS06bhXe7oLqrQ89g-vNSJVxI",
  authDomain: "practica-8fe8f.firebaseapp.com",
  projectId: "practica-8fe8f",
  storageBucket: "practica-8fe8f.appspot.com",
  messagingSenderId: "807193010992",
  appId: "1:807193010992:web:faf8b153f74e16f2509ef5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };