import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLVLap7bNPlWAWKSRmCvU8suNv3HqF0sc",
  authDomain: "covid-19-manager.firebaseapp.com",
  databaseURL:
    "https://covid-19-manager-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "covid-19-manager",
  storageBucket: "covid-19-manager.appspot.com",
  messagingSenderId: "171506453976",
  appId: "1:171506453976:web:8d8ff7329a96ef1bbcf6ad",
  measurementId: "G-W7YHG2408V",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
