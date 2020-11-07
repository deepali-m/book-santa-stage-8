import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBXX-oA25CH834WrEfjPtSmnqp02ekqGpA",
  authDomain: "santa-fa22e.firebaseapp.com",
  databaseURL: "https://santa-fa22e.firebaseio.com",
  projectId: "santa-fa22e",
  storageBucket: "santa-fa22e.appspot.com",
  messagingSenderId: "495648086452",
  appId: "1:495648086452:web:1b9d377edb05213326fae1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
