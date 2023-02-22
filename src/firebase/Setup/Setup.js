import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/**
 * creating firebase config object with all secret keys
 */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

/**
 * Creates and initializes a firebase app
 */
const app = initializeApp(firebaseConfig);

/**
 * Returns the Auth instance associated with the provided firebase app
 */
export const firebaseAuth = getAuth(app);

/**
 * Returns the existing default Firestore instance that is associated with the provided firebase
 */
export const db = getFirestore(app);
