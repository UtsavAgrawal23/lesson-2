import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAoZDWEEQPwxJGugDanyIQu9MMBroF2t1s",
    authDomain: "clothing-db-24234.firebaseapp.com",
    databaseURL: "https://clothing-db-24234.firebaseio.com",
    projectId: "clothing-db-24234",
    storageBucket: "",
    messagingSenderId: "325534238126",
    appId: "1:325534238126:web:ebf8842092db556b25343f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;