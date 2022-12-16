
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 
const firebaseConfig = {
  apiKey: "AIzaSyD_uN-gYD-dVA5eAQRZYrmuvRXvtUpqP2k",
  authDomain: "bitcode-b11e5.firebaseapp.com",
  projectId: "bitcode-b11e5",
  storageBucket: "bitcode-b11e5.appspot.com",
  messagingSenderId: "731582895552",
  appId: "1:731582895552:web:112947fe34b060c144e425"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database