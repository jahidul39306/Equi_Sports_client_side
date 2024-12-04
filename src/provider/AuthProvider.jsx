/* eslint-disable react/prop-types */
import { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

const GlobalContext = createContext();


const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const globalInfo = {

    }

    return (
        <GlobalContext.Provider value={globalInfo}>{children}</GlobalContext.Provider>
    );
};

export default AuthProvider;
