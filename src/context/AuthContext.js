import axios from "axios";
import React, { useEffect, useState } from "react";
import app from "../../src/FireBase";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [isAdmin, setAdmin] = useState(false);

    useEffect(() => {
        app.auth().onAuthStateChanged(async (user) => {
            const {data} = await axios('http://localhost:8000/users/' + user.uid )
            setCurrentUser(data)
            if (data.isAdmin) {
                setAdmin(true)
            }
        });

    }, []);
    return (
        <AuthContext.Provider
            value={{
                currentUser,
                isAdmin
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;