import React, { useState } from 'react';
import './Auth.css';

const AuthForm = ({ title, handleSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(email, password);
    };

    const onNavigate = (e)=>{
        console.log('e...navigate..',e);
    }

    return (
        <form onSubmit={onSubmit} className='auth-form'>
            <h2>{title}</h2>
            <div className='form-group'>
                <label>Email:</label>
                <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div className="button-group">
                <button type='submit' className='btn'>
                    {title}
                </button>
                <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={() => onNavigate(title === 'SignIn' ? 'SignUp' : 'SignIn')}
                >
                    {title === 'SignIn' ? 'SignUp' : 'SignIn'}
                </button>
            </div>
        </form>
    );
};

export default AuthForm;
