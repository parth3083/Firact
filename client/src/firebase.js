 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyBMIDND_p1Wc5XgpGmSy9881jWEeDtXHW4",
//   authDomain: "firact1.firebaseapp.com",
//   projectId: "firact1",
//   storageBucket: "firact1.appspot.com",
//   messagingSenderId: "855762774441",
//   appId: "1:855762774441:web:a7815af88515aeb3d37cb8",
//   measurementId: "G-6F4EJNH0KZ"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDhuOOb_uvfmIQjJpa9YqeAnXRqvXZRdtA",
  authDomain: "firact2.firebaseapp.com",
  projectId: "firact2",
  storageBucket: "firact2.appspot.com",
  messagingSenderId: "127745614302",
  appId: "1:127745614302:web:3a67414284f787c8867d4f",
  measurementId: "G-TCW9HBZHGQ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();