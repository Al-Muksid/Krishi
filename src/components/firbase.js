import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDASUftPXFZi_-rupHR3dmhv3EPkVc5hhY",
    authDomain: "my-app-202a7.firebaseapp.com",
    databaseURL: "https://my-app-202a7.firebaseio.com",
    projectId: "my-app-202a7",
    storageBucket: "my-app-202a7.appspot.com",
    messagingSenderId: "999084608499",
    appId: "1:999084608499:web:d6c655159e31e863c1e086",
    measurementId: "G-Q5K5HBB4GF"
      

});


const auth = firebase.auth();

export {auth};
