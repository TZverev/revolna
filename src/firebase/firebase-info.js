import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVN4UXOvFFBOZmvhbm5ghkALMJhd1qU_g",
    authDomain: "revolna.firebaseapp.com",
    projectId: "revolna",
    storageBucket: "revolna.appspot.com",
    messagingSenderId: "18767687511",
    appId: "1:18767687511:web:74d0c3cad1c83c469a1812",
    measurementId: "G-X8HHLS5PC1"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;