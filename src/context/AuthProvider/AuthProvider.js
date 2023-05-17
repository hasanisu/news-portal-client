import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    const providerLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser, profile);
    }

    const userEmailVerification =()=>{
        return sendEmailVerification(auth.currentUser)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser);
        }
        setLoading(false);
        }); 
        return()=>{
            unsubcribe();
        }
    },[])
    
    const authInfo ={
        user, 
        providerLogin, 
        logOut, 
        createUser, 
        loginUser, 
        loading,
        setLoading,
        updateUserProfile,
        userEmailVerification
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;