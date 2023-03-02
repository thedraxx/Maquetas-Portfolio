import { createContext } from 'react';

export interface UIContextProps {
    isChanged: boolean;

    changeState: () => void;
}

export const DeleteContext = createContext({} as UIContextProps);