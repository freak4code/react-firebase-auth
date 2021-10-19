import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeFirebaseAuthentication from "../Pages/Authentication/Firebase/firebase.init";

initializeFirebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSetUserDisplayName, setUserDisplayName] = useState(false);

  const auth = getAuth();

  const signUpUsingEmailAndPassword = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        console.log(user);
      })
      .catch((error) => {
        // const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  const signInUsingEmailAndPassword = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        console.log(user);
      })
      .catch((error) => {
        // const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(user);
      })
      .catch((error) => {
        // const errorMessage = error.message;
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state change
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
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    isSetUserDisplayName,
    setUserDisplayName,
    signUpUsingEmailAndPassword,
    signInUsingEmailAndPassword,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
