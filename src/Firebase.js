import firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAUWpupeEeW8Ts8vMMnFN0l_CROx9VF94c",
  authDomain: "itp-hospital-management-tw.firebaseapp.com",
  databaseURL: "https://itp-hospital-management-tw.firebaseio.com/",
  projectId: "itp-hospital-management-tw",
  storageBucket: "itp-hospital-management-tw.appspot.com",
  messagingSenderId: "1052900030307"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;