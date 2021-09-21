import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBn9O1pBo1EDW_bnVylJKs99qv6n6n6kl4",
  authDomain: "itp-covid-manager.firebaseapp.com",
  databaseURL: "https://itp-covid-manager-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "itp-covid-manager",
  storageBucket: "itp-covid-manager.appspot.com",
  messagingSenderId: "983496885829",
  appId: "1:983496885829:web:79b7bbfda6540bb60d852c",
})

export const auth = app.auth()
export default app
