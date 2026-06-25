// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHX381T-HED5siyvAuf_jAw2uavRGCnmc",
  authDomain: "auth-05-06-2006.firebaseapp.com",
  projectId: "auth-05-06-2006",
  storageBucket: "auth-05-06-2006.firebasestorage.app",
  messagingSenderId: "1039782739419",
  appId: "1:1039782739419:web:c48f7174ea3859a3b97bfe",
  measurementId: "G-THPCRDELBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default app;