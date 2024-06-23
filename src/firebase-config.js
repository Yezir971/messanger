// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIERBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIERBASE_AUTH_DOMAINE,
//   projectId: process.env.REACT_APP_FIERBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIERBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIERBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIERBASE_APP_ID,
//   // bdd 4
//   databaseURL : process.env.REACT_APP_FIERBASE_DATABASE_URL
  
// };
const firebaseConfig = {
  apiKey: "AIzaSyAWLbgxnl6ZmL0SN5oxOuAPx3Tckj4FbTc",
  authDomain: "messanger5-4d565.firebaseapp.com",
  databaseURL: "https://messanger5-4d565-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "messanger5-4d565",
  storageBucket: "messanger5-4d565.appspot.com",
  messagingSenderId: "1021689207163",
  appId: "1:1021689207163:web:8bad5c4e970ad55ddd45de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const dataBase = getDatabase(app)