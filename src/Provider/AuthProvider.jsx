import React from 'react';
import AuthContext from '../Context/AuthContext';

const AuthProvider = ({children}) => {
    const name = 'sarwar'

    const authInfo = {
        name,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;