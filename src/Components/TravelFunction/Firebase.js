import firebase from "firebase";

const firebaseConfig = {
  // apiKey: "AIzaSyDLVLap7bNPlWAWKSRmCvU8suNv3HqF0sc",
  // authDomain: "covid-19-manager.firebaseapp.com",
  // databaseURL:
  //   "https://covid-19-manager-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "covid-19-manager",
  // storageBucket: "covid-19-manager.appspot.com",
  // messagingSenderId: "171506453976",
  // appId: "1:171506453976:web:8d8ff7329a96ef1bbcf6ad",
  // measurementId: "G-W7YHG2408V",


  apiKey: "AIzaSyBn9O1pBo1EDW_bnVylJKs99qv6n6n6kl4",
  authDomain: "itp-covid-manager.firebaseapp.com",
  databaseURL: "https://itp-covid-manager-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "itp-covid-manager",
  storageBucket: "itp-covid-manager.appspot.com",
  messagingSenderId: "983496885829",
  appId: "1:983496885829:web:82218487bb6769210d852c",
  measurementId: "G-8VYHF6F1K1"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
