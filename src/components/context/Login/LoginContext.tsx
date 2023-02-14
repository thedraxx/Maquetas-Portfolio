import { createContext } from 'react';

export interface UIContextProps {
    isLoggin: boolean;
}

export const LoginContext = createContext({} as UIContextProps);