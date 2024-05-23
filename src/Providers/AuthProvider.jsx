import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useState } from "react";
import PropTypes from 'prop-types'; 

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user , setUser] = useState(null);


    //create a user using email password auth
    const createUser = (email  , password) => {
        return createUserWithEmailAndPassword(auth , email , password);
    }




    const authInfo = {
        user ,
        createUser ,
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