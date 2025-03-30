import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDz45ptF-NIezoEqXJ_3qPEKatV4_NUHUc",
    authDomain: "integrador-lehren.firebaseapp.com",
    projectId: "integrador-lehren",
    storageBucket: "integrador-lehren.appspot.com",
    messagingSenderId: "394229978093",
    appId: "1:394229978093:web:2d48fe631091dd2ea10de4",
    measurementId: "G-7T2B9BE8KT"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

