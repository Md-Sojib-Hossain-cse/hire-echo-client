import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user , setUser] = useState(null);
    const [loading , setLoading]= useState(true);


    //create a user using email password auth
    const createUser = (email  , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }


    //login user
    const logIn = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password);
    }

    
    //user observer
    //auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    } , [])



    const authInfo = {
        user ,
        loading,
        createUser ,
        logIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node,
}

export default AuthProvider;