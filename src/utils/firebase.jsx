// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAaqZqwLzPEgjKIsB3JG3nhX9TYGlEYnIM",
  authDomain: "netflixgpt-2024-aug.firebaseapp.com",
  projectId: "netflixgpt-2024-aug",
  storageBucket: "netflixgpt-2024-aug.appspot.com",
  messagingSenderId: "725066287225",
  appId: "1:725066287225:web:f65d5d6b63fb6395bfaca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);