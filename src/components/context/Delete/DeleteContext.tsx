import { createContext } from 'react';

export interface UIContextProps {
    isChanged: boolean;
    isModalOpen: boolean;
    changeState: () => void;
    setIsModalOpen: (value: boolean) => void;
    OpenModalAndSaveIdToDelete: (id: string) => void;
    DeleteMaqueta: () => void;
}

export const DeleteContext = createContext({} as UIContextProps);