import { createContext } from 'react';

export interface UploadContextProps {
    isValid: boolean;
    urlOfImages: string[];
    activateAlert: boolean;

    //Method
    handleAddMaqueta: ([]: any) => void;
    clearProyect: () => void;
    handleActiveAlert: () => void;
    clearArrayImages: () => void;
}

export const UploadContext = createContext({} as UploadContextProps);