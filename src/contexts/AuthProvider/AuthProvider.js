import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(); //Context related
const auth = getAuth(app); //Firebase related
const provider = new GoogleAuthProvider(); //firebase

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const [isDark,setIsDark]=useState(false);
    //firebase related
    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (userInfo)=>{
        return updateProfile(auth.currentUser, userInfo);
    }
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,provider)
    }
    const verifyEmail=()=>{
        return sendEmailVerification(auth.currentUser);
    }
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }

    //Set a observer for checking user
    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unsbscribe();
    },[])
    
    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    //context relted
    const authInfo={
        createUser,
        verifyEmail,
        resetPassword,
        signIn,
        signInWithGoogle,
        user,
        loading,
        updateUser,
        logOut,
        isDark,
        setIsDark
    }
    return (
        //context related
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;