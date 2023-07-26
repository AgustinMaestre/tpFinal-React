import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-43255.firebaseapp.com",
  projectId: "react-43255",
  storageBucket: "react-43255.appspot.com",
  messagingSenderId: "695756915031",
  appId: "1:695756915031:web:02bd268abb0ac3710f3e12",
  measurementId: "G-P529BDXZRH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
