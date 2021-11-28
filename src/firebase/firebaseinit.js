import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRFMVoWdi8dj0Vv8SClM1lWByF97Qg_eo",
  authDomain: "deutschblogvue.firebaseapp.com",
  projectId: "deutschblogvue",
  storageBucket: "deutschblogvue.appspot.com",
  messagingSenderId: "238405631903",
  appId: "1:238405631903:web:5accf916853998f885c7aa"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default  firebaseApp.firestore();
