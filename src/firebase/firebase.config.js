// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4mTXzIGUx7gcRFBjQvpLhuU7p3kJs8nc",
  authDomain: "news-portal-client-2a52f.firebaseapp.com",
  projectId: "news-portal-client-2a52f",
  storageBucket: "news-portal-client-2a52f.appspot.com",
  messagingSenderId: "1094218266635",
  appId: "1:1094218266635:web:8c3e29d380e00e47e8ef0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;