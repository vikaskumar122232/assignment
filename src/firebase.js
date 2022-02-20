import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyAABcTLrNQckTRKrasIeBSKuUh2Zer3vE4",
  authDomain: "vikas-assignment.firebaseapp.com",
  projectId: "vikas-assignment",
  storageBucket: "vikas-assignment.appspot.com",
  messagingSenderId: "640171416793",
  appId: "1:640171416793:web:30da98ab823513b41172c8"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db } 






// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBiJGYek-KlU3djbHVtz0viUAIVv5RxMmo",
//   authDomain: "assignment-4bfa9.firebaseapp.com",
//   projectId: "assignment-4bfa9",
//   storageBucket: "assignment-4bfa9.appspot.com",
//   messagingSenderId: "536514027084",
//   appId: "1:536514027084:web:a966e4f5675b8feb9edee9"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);