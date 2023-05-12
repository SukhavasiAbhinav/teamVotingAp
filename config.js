import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyCOqln4iexfKaDeO3LMLeH5A09J3vZrZV8",
  authDomain: "teamvotingapp-a6779.firebaseapp.com",
  projectId: "teamvotingapp-a6779",
  storageBucket: "teamvotingapp-a6779.appspot.com",
  messagingSenderId: "1065434346460",
  appId: "1:1065434346460:web:8eb625440f4bc89cd89519"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();