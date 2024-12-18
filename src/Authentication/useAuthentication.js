import React, { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isSignIn, setIsSignIn] = useState(false);

    const objPro = {
        isSignIn,
        setIsSignIn
    };

    return (
        <AuthContext.Provider value={objPro} >
            {children}
        </AuthContext.Provider>
    );
};

const useAuthentication = ()=>{
    return useContext(AuthContext);
};

export default useAuthentication;