import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAQMyJZ1tGEcTMuMS8_15f1TVXsakte1qQ",
    authDomain: "fir-tutorial-caf66.firebaseapp.com",
    databaseURL: "https://fir-tutorial-caf66.firebaseio.com",
    projectId: "fir-tutorial-caf66",
    storageBucket: "fir-tutorial-caf66.appspot.com",
    messagingSenderId: "788293467682",
    appId: "1:788293467682:web:9d6d6a633fe5cbda18947b"
  };
  const fire =   firebase.initializeApp(firebaseConfig);
export default fire;