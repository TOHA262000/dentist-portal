import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(); //Context related
const auth = getAuth(app); //Firebase related
const provider = new GoogleAuthProvider(); //firebase

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    //firebase related
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,provider)
    }

    //Set a observer for checking user
    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return ()=> unsbscribe();
    },[])
    
    const logOut =()=>{
        return signOut(auth);
    }
    //context relted
    const authInfo={
        createUser,
        signIn,
        signInWithGoogle,
        user,
        logOut
    }
    return (
        //context related
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;