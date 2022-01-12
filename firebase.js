// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4nwLFIM7g0fDdd_zfsyUeFViL1P5TYwA",
  authDomain: process.env.uber_app_authDomain,
  projectId: "uber-app-clone-2ff97",
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
