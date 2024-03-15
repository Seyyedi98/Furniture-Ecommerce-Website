import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAag_x4LvFzJjiK16qE3JE69akx8O4n39M",
  authDomain: "maltimart-92c7b.firebaseapp.com",
  projectId: "maltimart-92c7b",
  storageBucket: "maltimart-92c7b.appspot.com",
  messagingSenderId: "468622352897",
  appId: "1:468622352897:web:8d7efd110cf9da928a1600",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
