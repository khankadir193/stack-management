import React, { useState } from 'react';

const AuthForm = ({title,handleSubmit}) => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const onSubmit = (e)=>{
        e.preventDefault();
        handleSubmit(email,password);
    }

    return (
        <form onSubmit={onSubmit} className='auth-form'>
            <h2>{title}</h2>
            <div className='form-group'>
                <label>Email:</label>
                <input
                    type='email'
                    placeholder='enter your email'
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input
                    type='password'
                    placeholder='enter your password'
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
            </div>
            <button type='submit' className='btn'>{title}</button>
        </form>
    )
}

export default AuthForm;