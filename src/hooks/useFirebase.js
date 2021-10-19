import {
  getAuth,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./../Firebase/firebase.initialize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const auth = getAuth();
  const notify = (erro) => toast.error(erro);
  const googleProvider = new GoogleAuthProvider();
  const errorComponent = <ToastContainer />;
  // Popup login system
  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        notify(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const SignupUsingEmail = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        notify(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const SigninUsingEmail = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        notify(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    signInUsingGoogle,
    SigninUsingEmail,
    SignupUsingEmail,
    logOut,
    errorComponent,
    isLoading,
    error,
  };
};

export default useFirebase;
