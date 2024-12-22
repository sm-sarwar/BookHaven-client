import React, { useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // new user create 
    const createUser = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update Profile 
    const updateUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }

    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;