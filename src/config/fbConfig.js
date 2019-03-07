import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCaZWgX3gMVyS9a34-3H1jHW7DP9QJnslc",
  authDomain: "can-marioplan.firebaseapp.com",
  databaseURL: "https://can-marioplan.firebaseio.com",
  projectId: "can-marioplan",
  storageBucket: "can-marioplan.appspot.com",
  messagingSenderId: "153358895819"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export firebase;
