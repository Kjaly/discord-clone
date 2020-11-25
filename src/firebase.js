import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBLXpFigYcLW5BltjfiSSpnwVQ8ZMdEMX4",
  authDomain: "discord-clone-b50ff.firebaseapp.com",
  databaseURL: "https://discord-clone-b50ff.firebaseio.com",
  projectId: "discord-clone-b50ff",
  storageBucket: "discord-clone-b50ff.appspot.com",
  messagingSenderId: "820212291094",
  appId: "1:820212291094:web:12ecdbb0544fac1b2ec737",
  measurementId: "G-03KE2F99KY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db
