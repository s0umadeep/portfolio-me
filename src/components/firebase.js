import Firebase from "firebase";

var firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyBANzbjdTVtpwk04tmH9vzZWRZQB_TYNZU",
    authDomain: "portfolio-soumadeep.firebaseapp.com",
    projectId: "portfolio-soumadeep",
    storageBucket: "portfolio-soumadeep.appspot.com",
    messagingSenderId: "933180618492",
    appId: "1:933180618492:web:b3f6efab785cf64cd98979"
})
var db = firebaseApp.firestore();
export {db};