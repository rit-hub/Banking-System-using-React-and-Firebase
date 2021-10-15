import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYaWCFzRrPleZkPlAucyqfq9tDnAtUt0M",
  authDomain: "dummydb-81076.firebaseapp.com",
  databaseURL: "https://dummydb-81076-default-rtdb.firebaseio.com",
  projectId: "dummydb-81076",
  storageBucket: "dummydb-81076.appspot.com",
  messagingSenderId: "511396429452",
  appId: "1:511396429452:web:ffb45021676a118e8545a9",
  measurementId: "G-G6D3VH5Y18"
});

const db = firebaseApp.firestore();

export default db;
