import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import axios from "axios";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user , setUser] = useState(null);
    const [loading , setLoading]= useState(true);

    const googleAuthProvider = new GoogleAuthProvider();


    //create a user using email password auth
    const createUser = (email  , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }


    //login user with email password
    const logIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    //login user with google
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth , googleAuthProvider);
    }

    //update user info
    const updateUser = (currentUser , updatedInfo) => {
        return updateProfile(currentUser , updatedInfo);
    }

    //logout user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    
    //user observer
    //auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            setLoading(false);

            //generating token
            axios.post("http://localhost:5000/jwt" , {email : currentUser.email} , {withCredentials : true})
        });
        return () => {
            unSubscribe();
        }
    } , [])



    const authInfo = {
        user ,
        loading,
        createUser ,
        setUser , 
        logIn,
        googleLogin,
        updateUser,
        logOut,
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