import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkxCPXW4j_NOMeo6_r3ToPkIB_ttWnCzI",
  authDomain: "clone-48118.firebaseapp.com",
  databaseURL: "https://clone-48118.firebaseio.com",
  projectId: "clone-48118",
  storageBucket: "clone-48118.appspot.com",
  messagingSenderId: "316567929075",
  appId: "1:316567929075:web:75df860568b17d45a5b786",
  measurementId: "G-LQX3Q1QCP5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
