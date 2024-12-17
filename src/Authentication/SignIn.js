import React from 'react'
import AuthForm from './AuthForm';
import { signIn } from './authService';

const SignIn = () => {
    
    const handleSignIn = async(email,password) => {
        try{
            await signIn(email,password);
            alert('Sign In Successfully...');
        }catch(error){
            alert(`SignIn Failed:- ${error.message}`);
        }
    };

    return <AuthForm title='SignIn' handleSubmit={handleSignIn} />
};

export default SignIn;