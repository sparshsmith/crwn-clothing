import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCeGIq_TIhLhvCPZMIoByH0QNos7wfcXQM",
    authDomain: "crwn-clothing-d7099.firebaseapp.com",
    projectId: "crwn-clothing-d7099",
    storageBucket: "crwn-clothing-d7099.appspot.com",
    messagingSenderId: "314495136701",
    appId: "1:314495136701:web:60cb8f1c4bf5f5a59358d4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: ' select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;