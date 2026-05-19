// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDm2AoF_J4YvpIdvcat_gxIcavrIvNgiDI",
    authDomain: "deenpath-a2747.firebaseapp.com",
    projectId: "deenpath-a2747",
    storageBucket: "deenpath-a2747.firebasestorage.app",
    messagingSenderId: "688259589364",
    appId: "1:688259589364:web:a1212375d60fc1a653aaa1",
    measurementId: "G-903ZN6HCJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();