import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAFQy-faiJ9HM29VC7qhigZvKKuK2CVCmA",
  authDomain: "road-network-23031.firebaseapp.com",
  projectId: "road-network-23031",
  storageBucket: "road-network-23031.appspot.com",
  messagingSenderId: "443382409544",
  appId: "1:443382409544:web:0438775770ec58d0052b7d",
};

// const auth = getAuth();

// export function signup(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password);
// }

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();

//get collection ref
