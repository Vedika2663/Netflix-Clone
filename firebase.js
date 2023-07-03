// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import * as firebase from "firebase/compat/app";
// import firebase from 'firebase/compat/app';
import { getAuth} from "firebase/auth";
import { getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg5g1-2nMIYnbSfcbRa_obH6_KeaJLI-I",
  authDomain: "vflix-4a392.firebaseapp.com",
  projectId: "vflix-4a392",
  storageBucket: "vflix-4a392.appspot.com",
  messagingSenderId: "52516087789",
  appId: "1:52516087789:web:243875c12c2c778e9469e4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {auth, db};