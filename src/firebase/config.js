import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLpkgOVDRpVkgz3vSZLn6-381kYoDe_FA",
  authDomain: "savings-app-df0e6.firebaseapp.com",
  projectId: "savings-app-df0e6",
  storageBucket: "savings-app-df0e6.appspot.com",
  messagingSenderId: "1086955409262",
  appId: "1:1086955409262:web:1ad55007318bcc59717b7f"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//time stamp
const timestamp = firebase.firestore.Timestamp


export { projectFirestore, projectAuth, timestamp }