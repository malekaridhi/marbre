// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBPwFwibSb-ZSRanJUq0M8XNOr4n3XCXaY",
  authDomain: "mysog-f502c.firebaseapp.com",
  projectId: "mysog-f502c",
  storageBucket: "mysog-f502c.appspot.com",
  messagingSenderId: "535892396626",
  appId: "1:535892396626:web:30d08433abf8297b96ed8b"
};
const app= firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = app.auth()

export default  app