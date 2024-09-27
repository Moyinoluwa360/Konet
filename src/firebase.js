// Import Firebase functions using named imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyByxtsYwtDZIqBhru4tuf6j5vB5Y-oZvLI",
  authDomain: "konet-83edb.firebaseapp.com",
  projectId: "konet-83edb",
  storageBucket: "konet-83edb.appspot.com",
  messagingSenderId: "983535811211",
  appId: "1:983535811211:web:75353584ed7068e7b3f28e"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp);

// Set up Google Auth Provider
const provider = new GoogleAuthProvider();

// Initialize Firebase Storage
const storage = getStorage(firebaseApp);
export {auth, provider, storage ,db};