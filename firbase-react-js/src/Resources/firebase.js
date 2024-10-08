// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN-VHNc6Hv-mHWzhg-C86l9n2ZY3mmjNo",
  authDomain: "learning-firebase-rjs.firebaseapp.com",
  projectId: "learning-firebase-rjs",
  storageBucket: "learning-firebase-rjs.appspot.com",
  messagingSenderId: "139930646374",
  appId: "1:139930646374:web:b25c813fd19a9e41e0baa7",
  measurementId: "G-QZS56KGPC4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
