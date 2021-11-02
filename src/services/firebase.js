import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore/lite';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCoDNFhm6Y5w_q_1Oj6invjfajZIbA4tPk",
    authDomain: "fb-insta-clone-4e3f6.firebaseapp.com",
    projectId: "fb-insta-clone-4e3f6",
    storageBucket: "fb-insta-clone-4e3f6.appspot.com",
    messagingSenderId: "699951021411",
    appId: "1:699951021411:web:9da3bd406579c86b79a756",
    measurementId: "G-D1GBDQMG5Z"
})

const db = firebaseApp;

export { db, getFirestore, collection, getDocs, addDoc, serverTimestamp }