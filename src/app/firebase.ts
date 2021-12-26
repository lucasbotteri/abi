// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjw2lir6GJrIO9YExN71XlYyYYReaDgE0",
  authDomain: "sochi-56cf0.firebaseapp.com",
  projectId: "sochi-56cf0",
  storageBucket: "sochi-56cf0.appspot.com",
  messagingSenderId: "462916230782",
  appId: "1:462916230782:web:f5c20298a1a6a5df29c22f",
  measurementId: "G-1FKZ3XMTNG",
};

// Initialize Firebase
export const firesbaseApp = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firesbaseApp);
export const firestore = getFirestore(firesbaseApp);
export const firestorage = getStorage(firesbaseApp);
