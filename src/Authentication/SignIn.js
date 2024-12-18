import React from 'react'
import AuthForm from './AuthForm';
import { signIn } from './authService';
import './Auth.css';
import useAuthentication from './useAuthentication';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    // const { setIsSignIn } = useAuthentication();
    const navigate = useNavigate();
    
    const handleSignIn = async(email,password) => {
        try{
            await signIn(email,password);
            // setIsSignIn(true); //update authentication state
            alert('Sign In Successfully...');
            navigate('/stack-content');   // navigate to stack-content page
        }catch(error){
            alert(`SignIn Failed:- ${error.message}`);
        }
    };

    return <AuthForm title='SignIn' handleSubmit={handleSignIn} />
};

export default SignIn;