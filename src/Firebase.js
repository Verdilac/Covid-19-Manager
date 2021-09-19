import firebase from "firebase";

// Firebase Configuration with remote database
const firebaseConfig = {
    apiKey: "AIzaSyCv2nqmAyxQYoYMyuM1goUKCVSegH_fwaA",
    authDomain: "hospital-inventory-managment.firebaseapp.com",
    databaseURL: "https://hospital-inventory-managment-default-rtdb.firebaseio.com",
    projectId: "hospital-inventory-managment",
    storageBucket: "hospital-inventory-managment.appspot.com",
    messagingSenderId: "442613914850",
    appId: "1:442613914850:web:9bd16199f94a28c8c492bb",
    measurementId: "G-S4FYCRN7CK"
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;