// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.uber_app_apikey,
  authDomain: process.env.uber_app_authDomain,
  projectId: process.env.uber_app_projectId,
  storageBucket: process.env.uber_app_storageBucket,
  messagingSenderId: "725001836581",
  appId: process.env.uber_app_appId,
  measurementId: process.env.uber_app_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, analytics, provider, auth };
