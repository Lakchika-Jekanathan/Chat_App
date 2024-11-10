import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-f582a.firebaseapp.com",
  projectId: "chatapp-f582a",
  storageBucket: "chatapp-f582a.appspot.com",
  messagingSenderId: "916931459579",
  appId: "1:916931459579:web:0d98bf341e30ce3e42b35e"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);