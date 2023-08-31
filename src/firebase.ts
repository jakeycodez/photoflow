import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/storage";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxyC5pJpB0rTBclPnCfvIoWTxWyl9GhaU",
  authDomain: "photoflow-fc8b7.firebaseapp.com",
  projectId: "photoflow-fc8b7",
  storageBucket: "photoflow-fc8b7.appspot.com",
  messagingSenderId: "727655765164",
  appId: "1:727655765164:web:d9c50b03d73324be98fb09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const userAuth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);