import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBSPSHlQSFLzOUzcojXlV6UFr93Cukf_Fg",
    authDomain: "patient-management-syste-cead1.firebaseapp.com",
    databaseURL: "https://patient-management-syste-cead1-default-rtdb.firebaseio.com",
    projectId: "patient-management-syste-cead1",
    storageBucket: "patient-management-syste-cead1.appspot.com",
    messagingSenderId: "1052148434755",
    appId: "1:1052148434755:web:822c983545a85e7a29d1f6",
    measurementId: "G-914FSQT6C0"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;