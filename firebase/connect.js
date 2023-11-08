import { getApp,getApps,initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC3rdh6pcFR3ZmtrTK52ytVcDVcnV0NO9Q",
    authDomain: "mobile-project-d426e.firebaseapp.com",
    projectId: "mobile-project-d426e",
    storageBucket: "mobile-project-d426e.appspot.com",
    messagingSenderId: "843901661015",
    appId: "1:843901661015:web:2da2ea724d3390e6ebd812",
    measurementId: "G-W0YD3RQJWT"
  };

//   const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

//   const firebaseAuth = getAuth(app);
//   const firestoreDB = getFirestore(app);

//   export {app,firebaseAuth,firestoreDB};
const app = initializeApp(firebaseConfig);
export default app
  