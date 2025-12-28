import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzXhbs2lwdgzkEDlYpCa3lLnOeyGIug2M",
  authDomain: "undangan-pernikahan-605f2.firebaseapp.com",
  projectId: "undangan-pernikahan-605f2",
  storageBucket: "undangan-pernikahan-605f2.firebasestorage.app",
  messagingSenderId: "869714647248",
  appId: "1:869714647248:web:625861c5e0cf83ed3466d5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
