import React from 'react'
import { signUp } from './authService';

const SignUp = () => {
    const handleSignUp = async (email, password) => {
        try {
            await signUp(email, password);
            alert('SignUp Successfully...');
        } catch (error) {
            alert(`SignUp Failed:- ${error.message}`);
        }
    };

    return <AuthForm title='SignUp' handleSubmit={handleSignUp} />
};

export default SignUp;