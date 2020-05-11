import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'


const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
});
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const storage = firebase.storage()

const provider = new firebase.auth.GoogleAuthProvider()
export function signInWithGoogle() {
    auth.signInWithPopup(provider)
}

export { storage ,app as default } 
