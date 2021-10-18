import {
  getAuth,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "./../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Popup login system
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return { user, signInUsingGoogle, logOut };
};

export default useFirebase;
