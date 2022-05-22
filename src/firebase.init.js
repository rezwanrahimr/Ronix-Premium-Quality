// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnaEFO21YWfSajNcEfd90Jf24WIoZMGI4",
  authDomain: "ronix-premium-quality.firebaseapp.com",
  projectId: "ronix-premium-quality",
  storageBucket: "ronix-premium-quality.appspot.com",
  messagingSenderId: "575350082299",
  appId: "1:575350082299:web:19428f51c19cc4d882be5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
