import React from "react";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGGl8VLoHOy7m2mzSWN2K_88pmaxn-pKo",
  authDomain: "my-firebase-project-17e80.firebaseapp.com",
  projectId: "my-firebase-project-17e80",
  storageBucket: "my-firebase-project-17e80.appspot.com",
  messagingSenderId: "886240962042",
  appId: "1:886240962042:web:60601421cd72ad8c9ab043",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const FirebaseContext = React.createContext();

function FirebaseProvider(props) {
  const children = props.children;
  const theValues = { app, auth, db };
  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseProvider;
