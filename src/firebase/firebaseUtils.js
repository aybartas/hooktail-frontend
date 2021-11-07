import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwWrZY6tmgAcM6IjVnJhOAzzsxo_kBkso",
    authDomain: "hooktail-5bf41.firebaseapp.com",
    projectId: "hooktail-5bf41",
    storageBucket: "hooktail-5bf41.appspot.com",
    messagingSenderId: "296764293583",
    appId: "1:296764293583:web:9e1f0ede944cfaca46d2ba",
    measurementId: "G-QR4JRJLEH9"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.default.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({propmt:'select_account'});

export const signInWithGoogle = (event) => {
  event.preventDefault();
  auth.signInWithPopup(provider)
};

export default firebase;

