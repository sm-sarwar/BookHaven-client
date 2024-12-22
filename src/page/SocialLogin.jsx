import React from 'react';
import useAuth from '../Hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
    const {signInWithGoogle} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state || '/'
    
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then( result =>{
            console.log(result.user)
            navigate(from)

        })
        .catch(error => {
            console.log(error.message)
        });
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button className='border btn w-full text-center space-x-3 mb-2 px-2' 
            onClick={handleGoogleLogin}>
               <FcGoogle className='text-2xl'></FcGoogle> <span>Login with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;