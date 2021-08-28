// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBuribjD0soHOl_HG257LlVw9gkMaBWYKg",
  authDomain: "bokchoy-49f99.firebaseapp.com",
  projectId: "bokchoy-49f99",
  storageBucket: "bokchoy-49f99.appspot.com",
  messagingSenderId: "35562183828",
  appId: "1:35562183828:web:482f65e3e82f3f35582881",
  measurementId: "G-SML2FG2KLY"
};

const app = firebase.initializeApp(firebaseConfig);


export const storage = firebase.storage();
