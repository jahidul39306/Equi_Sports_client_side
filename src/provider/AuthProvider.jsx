/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

const GlobalContext = createContext();


const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(auth.currentUser);
    const [loading, setLoading] = useState(true);

    // server side url
    const serverURL = 'http://localhost:5000';

    // variables for google signin login
    const googleProvider = new GoogleAuthProvider();

    // create user with email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user with email
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const userLogOut = () => {
        return signOut(auth);
    }

    // update profile
    const updateUserProfile = (updatedProfile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updatedProfile);
    }

    // google sigin
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // google login
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const globalInfo = {
        createUser,
        user,
        setUser,
        loading,
        setLoading,
        loginUser,
        userLogOut,
        updateUserProfile,
        createUserWithGoogle,
        loginWithGoogle,
        serverURL,

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [auth]);


    return (
        <GlobalContext.Provider value={globalInfo}>{children}</GlobalContext.Provider>
    );
};

export { AuthProvider, GlobalContext };
