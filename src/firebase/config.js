// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//importacion de la autenticación
import { getAuth } from 'firebase/auth';
//base de datos
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDntp3ougvwB5hpYyqZfcjGZDAbESmoHyk",
    authDomain: "react-journal-app-b7b06.firebaseapp.com",
    projectId: "react-journal-app-b7b06",
    storageBucket: "react-journal-app-b7b06.appspot.com",
    messagingSenderId: "600217576797",
    appId: "1:600217576797:web:b3ce356916803c8e14b4b4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

//Autenticación
export const FirebaseAuth = getAuth( FirebaseApp );

//Fireston base de datos
export const FirbaseDB = getFirestore( FirebaseApp );