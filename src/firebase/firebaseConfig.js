// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjLh9rZRlDYslXuQ5sZKey6is5YCOQZXM",
  authDomain: "ecommerce-ch-f2592.firebaseapp.com",
  projectId: "ecommerce-ch-f2592",
  storageBucket: "ecommerce-ch-f2592.appspot.com",
  messagingSenderId: "810162210394",
  appId: "1:810162210394:web:48edfb1df1a0bcfb817a63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
