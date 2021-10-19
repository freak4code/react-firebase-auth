import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const methods = useFirebase();
    return (
        <AuthContext.Provider value={methods}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;