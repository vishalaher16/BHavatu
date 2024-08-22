// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Export Google Sign-In function
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('User signed in: ', result.user);
    })
    .catch((error) => {
      console.error('Error signing in with Google: ', error);
    });
};
