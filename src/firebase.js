import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAVrmuDaV6gvIl7u60R6NZ-Q1mWiP30DI",
  authDomain: "twitter-clone-782f3.firebaseapp.com",
  projectId: "twitter-clone-782f3",
  storageBucket: "twitter-clone-782f3.appspot.com",
  messagingSenderId: "623064703705",
  appId: "1:623064703705:web:ff2283699c6787faf6d4c8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
