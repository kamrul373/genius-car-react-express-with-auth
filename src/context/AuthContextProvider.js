import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    // create user 

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // udpateUser 
    const updateUser = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    // login
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // on auth state changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        };
    }, []);

    // signout 
    const logout = () => {
        return signOut(auth);
    }

    const authinfo = {
        user,
        loading,
        createUser,
        updateUser,
        login,
        logout
    }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;