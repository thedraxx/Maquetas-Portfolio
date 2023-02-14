import { createContext } from 'react';

export interface UploadContextProps {
    isValid: boolean;
    urlOfImages: string[];

    //Method
    handleAddMaqueta: ([]: any) => void;
}

export const UploadContext = createContext({} as UploadContextProps);