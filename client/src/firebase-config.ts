import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwBnk9QpwGyiqjDw_rDVSfOx2aSegF9WY",
  authDomain: "e-commerce-2f7c1.firebaseapp.com",
  projectId: "e-commerce-2f7c1",
  storageBucket: "e-commerce-2f7c1.appspot.com",
  messagingSenderId: "85597113717",
  appId: "1:85597113717:web:178fd465e37dacbe52d73c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
