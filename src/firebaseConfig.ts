import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBOF-VUF6z3Th1B-o8wfE1rnrnc9fGIwNc",
  authDomain: "file-sharing-7641a.firebaseapp.com",
  projectId: "file-sharing-7641a",
  storageBucket: "file-sharing-7641a.appspot.com",
  messagingSenderId: "173707256031",
  appId: "1:173707256031:web:6a89f3d96db03a96f9096a",
  measurementId: "G-9TKMBB8WWY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
