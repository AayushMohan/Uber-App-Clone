// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.UBER_APP_apikey,
  authDomain: "uber-app-clone-2ff97.firebaseapp.com",
  projectId: "uber-app-clone-2ff97",
  storageBucket: "uber-app-clone-2ff97.appspot.com",
  messagingSenderId: "725001836581",
  appId: "1:725001836581:web:e9c0fdcb988bc2909007cc",
  measurementId: "G-QSF6DHCEJB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, analytics, provider, auth };
