import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBGXIM8rrpMkBVBfQ7GrDnFq0d_bAYxwG0",
  authDomain: "fireauth-dd15a.firebaseapp.com",
  projectId: "fireauth-dd15a",
  storageBucket: "fireauth-dd15a.appspot.com",
  messagingSenderId: "363163191215",
  appId: "1:363163191215:web:0c7573cc807aeeaecad15a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {app,auth}