import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(); //Context related
const auth = getAuth(app); //Firebase related

const AuthProvider = ({children}) => {
    //firebase related
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }
    //context relted
    const authInfo={
        createUser,
    }
    return (
        //context related
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;