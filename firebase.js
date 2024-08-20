import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAF-y_ZwMsHRegC5XdKQrtefKyTj4m8ajc",
    authDomain: "chatbot-waitlist.firebaseapp.com",
    projectId: "chatbot-waitlist",
    storageBucket: "chatbot-waitlist.appspot.com",
    messagingSenderId: "178888291896",
    appId: "1:178888291896:web:03e790bb819109399b18cd",
    measurementId: "G-DCXTZWRWWY"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };