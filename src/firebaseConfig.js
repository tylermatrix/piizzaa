import Firebase from 'firebase' 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDrxWEhG11w2dC5PrXVO7ydlOsHhSyfwxQ",
    authDomain: "piizzaa-b1dd6.firebaseapp.com",
    databaseURL: "https://piizzaa-b1dd6.firebaseio.com",
    projectId: "piizzaa-b1dd6",
    storageBucket: "piizzaa-b1dd6.appspot.com",
    messagingSenderId: "99281118488",
    appId: "1:99281118488:web:a9a6d15a4a15cef9166a6d",
    measurementId: "G-T0BMC0877T"
  };
  // Initialize Firebase
  const firebaseApp = Firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.database();
  export const dbMenuRef = db.ref('menu');
  
