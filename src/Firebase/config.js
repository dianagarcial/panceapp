// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHiI44YiyXSc-WuIn95UXWg9KBoM4ANyc",
    authDomain: "panceapp-31f0b.firebaseapp.com",
    projectId: "panceapp-31f0b",
    storageBucket: "panceapp-31f0b.appspot.com",
    messagingSenderId: "580863316936",
    appId: "1:580863316936:web:0746efeba8c0b064c326fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth }