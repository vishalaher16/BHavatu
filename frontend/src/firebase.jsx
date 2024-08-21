// src/firebase.js (or wherever your Firebase config is stored)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Auth

const firebaseConfig = {
  apiKey: "AIzaSyA_mZ2HpOYUQxWMicmvSNup5TRlaJnzvfs",
  authDomain: "bhavatuecom.firebaseapp.com",
  projectId: "bhavatuecom",
  storageBucket: "bhavatuecom.appspot.com",
  messagingSenderId: "747578764267",
  appId: "1:747578764267:web:7940801253582080bdc7ae",
  measurementId: "G-VKQXE9YC5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
