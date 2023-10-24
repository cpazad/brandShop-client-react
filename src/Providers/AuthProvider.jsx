import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import PropTypes from "prop-types";

// creating context with export
export const AuthContext = createContext(null);

// Authenticating with Google Service
const googleAuth = new GoogleAuthProvider();
// getting auth from firebase
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
  // setting the states for users and loading time
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // creating new users
  const createUser = (email, password,) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn with email and Password

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // SignIn with Google service
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuth);
  };

  // Sign Out from the website
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // sending info via AuthInfo props
  const AuthInfo = {
    users,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={AuthInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;

// Proptypes declaration
AuthProvider.propTypes = {
  children: PropTypes.node,
};
