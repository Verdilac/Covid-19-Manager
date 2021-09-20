import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGASnMEWL116zEv_sBR-kaJaXKJjnNJ2Q",
  authDomain: "patient-management-syste-a1e77.firebaseapp.com",
  databaseURL: "https://patient-management-syste-a1e77-default-rtdb.firebaseio.com",
  projectId: "patient-management-syste-a1e77",
  storageBucket: "patient-management-syste-a1e77.appspot.com",
  messagingSenderId: "740163779477",
  appId: "1:740163779477:web:f230d78972575ebfae149c",
  measurementId: "G-GWXDLP1V37"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;