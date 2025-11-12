import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXNw5OrvYEMAFtNCyS08FOIH1d8RAuL5k",
  authDomain: "fir-app-5ea2b.firebaseapp.com",
  projectId: "fir-app-5ea2b",
  storageBucket: "fir-app-5ea2b.firebasestorage.app",
  messagingSenderId: "967017840971",
  appId: "1:967017840971:web:de602d29983f86061128ce",
  measurementId: "G-7PBHPV3KSF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);