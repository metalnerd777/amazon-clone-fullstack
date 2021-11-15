import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCTyf8u62pnHmUJuJ50bquiy3iUt_q9Bg",
  authDomain: "clone-fs.firebaseapp.com",
  projectId: "clone-fs",
  storageBucket: "clone-fs.appspot.com",
  messagingSenderId: "153075373446",
  appId: "1:153075373446:web:9d35668f2b06c3582c4807",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
