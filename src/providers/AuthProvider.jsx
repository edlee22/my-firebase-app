import React, { useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { FirebaseContext } from "./FirebaseProvider";
export const AuthContext = React.createContext();

function AuthProvider(props) {
  const children = props.children;
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState();

  const fbContext = useContext(FirebaseContext);
  const auth = fbContext.auth;

  const login = async (email, password) => {
    try {
      let userCred = await signInWithEmailAndPassword(auth, email, password);
      if (userCred) {
          setAuthError(null);
          console.log("Logged in!!", userCred.user);
        } else {
            console.log("Login failed!");
            setAuthError('Dunno why, but login failed!!');
      }
    } catch (ex) {
      console.log("AUTH FAILURE!", ex.message);
      setAuthError(ex.message)
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
    console.log("onAuthStateChanged() - new User!!", user);
    setUser(user);
    });
    return unsub; // to shut down onAuthStateChanged listener
    }, [auth]);

  const theValues = { user, authError, login, logout };
  return (
    <AuthContext.Provider value={theValues}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
