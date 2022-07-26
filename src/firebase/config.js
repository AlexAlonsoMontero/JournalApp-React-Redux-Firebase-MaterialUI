// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//importacion de la autenticación
import { getAuth } from 'firebase/auth';
//base de datos
import { getFirestore } from 'firebase/firestore/lite';
import { getEnviroments } from "../helpers/getEnviroments";

const {
    VITE_FIREBASE_APIKEY,
    VITE_FIREBASE_AUTHDOMAIN,
    VITE_FIREBASE_PROJECTID,
    VITE_FIREBASE_STORAGEBUCKET,
    VITE_FIREBASE_MESSAGINGSENDERID,
    VITE_FIREBASEAPP_ID
} = getEnviroments()

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: VITE_FIREBASE_APIKEY,
    authDomain: VITE_FIREBASE_AUTHDOMAIN,
    projectId: VITE_FIREBASE_PROJECTID,
    storageBucket: VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: VITE_FIREBASE_MESSAGINGSENDERID,
    appId: VITE_FIREBASEAPP_ID
};

//TESTING
// const firebaseConfig = {

//     apiKey: VITE_FIREBASE_APIKEY,
//     authDomain: VITE_FIREBASE_AUTHDOMAIN,
//     projectId: VITE_FIREBASE_PROJECTID,
//     storageBucket: VITE_FIREBASE_STORAGEBUCKET,
//     messagingSenderId: VITE_FIREBASE_MESSAGINGSENDERID,
//     appId: VITE_FIREBASEAPP_ID

// };


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

//Autenticación
export const FirebaseAuth = getAuth(FirebaseApp);

//Fireston base de datos
export const FirbaseDB = getFirestore(FirebaseApp);