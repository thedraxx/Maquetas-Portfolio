import { createContext } from 'react';

export interface UIContextProps {
    isLoggedIn: boolean;

    // Method
    StartLogin: () => void;
    StartLogout: () => void;
}

export const LoginContext = createContext({} as UIContextProps);