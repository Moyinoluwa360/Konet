import firebase from "firebase/app";
import "firebase/firestore"; // Import Firestore
import "firebase/auth"; // Import Authentication
import "firebase/storage"; // Import Storage

const firebaseConfig = {
  apiKey: "AIzaSyByxtsYwtDZIqBhru4tuf6j5vB5Y-oZvLI",
  authDomain: "konet-83edb.firebaseapp.com",
  projectId: "konet-83edb",
  storageBucket: "konet-83edb.appspot.com",
  messagingSenderId: "983535811211",
  appId: "1:983535811211:web:75353584ed7068e7b3f28e"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firestore
const db = firebase.firestore();

// Authentication
const auth = firebase.auth(); // Call as a function

// Google Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();

// Storage
const storage = firebase.storage(); // Call as a function

export {auth, provider, storage };
export default db;