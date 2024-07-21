import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDT20OGssrbpYMFl-fpL_6Ss5-OfemuHFM",
  authDomain: "ecommerce-e534a.firebaseapp.com",
  projectId: "ecommerce-e534a",
  storageBucket: "ecommerce-e534a.appspot.com",
  messagingSenderId: "518901157353",
  appId: "1:518901157353:web:1855e28a6586a089838f78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);