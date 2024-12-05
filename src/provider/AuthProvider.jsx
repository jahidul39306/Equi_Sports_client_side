/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const GlobalContext = createContext();


const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(auth.currentUser);
    const [loading, setLoading] = useState(true);


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

    const globalInfo = {
        createUser,
        user,
        setUser,
        loading,
        setLoading,
        loginUser,

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
