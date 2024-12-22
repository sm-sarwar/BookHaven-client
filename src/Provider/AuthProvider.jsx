import React, { useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // new user create 
    const createUser = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // update Profile 
    const updateUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }

    // signOut user 
    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            // console.log('current user', currentUser)
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{
            unsubscribe()
        }
       },[])

    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        loading,
        signInUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;