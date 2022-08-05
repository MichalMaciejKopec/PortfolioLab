import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBc2Wr5t487RAq8CL4nUgmHv-VEdHksoOA",
    authDomain: "oddamrzeczy-6eac0.firebaseapp.com",
    projectId: "oddamrzeczy-6eac0",
    storageBucket: "oddamrzeczy-6eac0.appspot.com",
    messagingSenderId: "615023583079",
    appId: "1:615023583079:web:e250c28eaa5071c137d9c2",
    measurementId: "G-BHWPEZ8X4S"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);