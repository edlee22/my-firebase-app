import React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGGl8VLoHOy7m2mzSWN2K_88pmaxn-pKo",
  authDomain: "my-firebase-project-17e80.firebaseapp.com",
  projectId: "my-firebase-project-17e80",
  storageBucket: "my-firebase-project-17e80.appspot.com",
  messagingSenderId: "886240962042",
  appId: "1:886240962042:web:60601421cd72ad8c9ab043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseContext = React.createContext();

function FirebaseProvider(props) {
  const children = props.children;
  const theValues = { app };
  return (
    <FirebaseContext.Provider value={theValues}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
