import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBn9O1pBo1EDW_bnVylJKs99qv6n6n6kl4",
  authDomain: "itp-covid-manager.firebaseapp.com",
  databaseURL: "https://itp-covid-manager-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "itp-covid-manager",
  storageBucket: "itp-covid-manager.appspot.com",
  messagingSenderId: "983496885829"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;