// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoa2PMEj5FxED8_IBwU0Vi-ogMjoilJbY",
  authDomain: "twitter-clone-yt-b114a.firebaseapp.com",
  projectId: "twitter-clone-yt-b114a",
  storageBucket: "twitter-clone-yt-b114a.appspot.com",
  messagingSenderId: "1087365991177",
  appId: "1:1087365991177:web:66d04f3a9583cbcf8a21d8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
