import * as firebase from 'firebase';
import { firebaseConfig } from "./config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyCzLdWJEq0vOWSjfVA3C5OQxX--HO3kJmI",
    authDomain: "badbank-bb18b.firebaseapp.com",
    projectId: "badbank-bb18b",
    storageBucket: "badbank-bb18b.appspot.com",
    messagingSenderId: "745789819925",
    appId: "1:745789819925:web:8ae5823019b3ac9692d21c",
};
const auth = firebase.auth();
const Google = firebase.GoogleAuthProvider();
const signInWithPopup = firebase.signInWithPopup();

export default {
  auth, Google, signInWithPopup
};