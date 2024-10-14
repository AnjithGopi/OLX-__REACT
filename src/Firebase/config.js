import firebase from "firebase";
import 'firebase/auth';
import "firebase/storage"


// const firebaseConfig={
//     apiKey: "AIzaSyABA6dJ0neHOiq6ktVi2xSYdgpmByEpBVM",
//     authDomain: "olx-clone-655f5.firebaseapp.com",
//     projectId: "olx-clone-655f5",
//     storageBucket: "olx-clone-655f5.appspot.com",
//     messagingSenderId: "521865148885",
//     appId: "1:521865148885:web:e01138f06b0e3a6041655c",
//     measurementId: "G-HJ5JSW4JXG"
// }
const firebaseConfig = {
    apiKey: "AIzaSyDt5weuA2h2SkUaRuEq8Ar5qLmhRMiDof4",
    authDomain: "my-project-44bde.firebaseapp.com",
    projectId: "my-project-44bde",
    storageBucket: "my-project-44bde.appspot.com",
    messagingSenderId: "819839350619",
    appId: "1:819839350619:web:7bbc957875f0f58e400c7e",
    measurementId: "G-VWS52ZYKRF"
  };
  


export default firebase.initializeApp(firebaseConfig)