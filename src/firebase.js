// import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/firestore";
// import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg2sOrrFzWuv-wlCDa-askNmajhm64wVo",
  authDomain: "messenger-c53be.firebaseapp.com",
  projectId: "messenger-c53be",
  storageBucket: "messenger-c53be.appspot.com",
  messagingSenderId: "681204782779",
  appId: "1:681204782779:web:541a568a2fde536f55bb9e",
  measurementId: "G-8Y2GZ8TD3Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
export default db;
