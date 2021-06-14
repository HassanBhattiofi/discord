import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBiDLkAAdQu_vqbSl8gQeV4P7FSi-ef3QQ",
  authDomain: "discord-9b7fd.firebaseapp.com",
  projectId: "discord-9b7fd",
  storageBucket: "discord-9b7fd.appspot.com",
  messagingSenderId: "290189678779",
  appId: "1:290189678779:web:2b71ae38ee66a29918f19e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
