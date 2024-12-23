import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    console.log(location)

    if(loading){
        return <div className='my-20 text-center'><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRoute;