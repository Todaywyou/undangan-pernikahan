import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "PASTE_DARI_FIREBASE",
  authDomain: "PASTE_DARI_FIREBASE",
  projectId: "PASTE_DARI_FIREBASE",
  storageBucket: "PASTE_DARI_FIREBASE",
  messagingSenderId: "PASTE_DARI_FIREBASE",
  appId: "PASTE_DARI_FIREBASE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
