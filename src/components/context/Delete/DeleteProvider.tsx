import { useState } from 'react';
import { DeleteContext } from './';
import uploadAPI from '@/api/uploadApi';

export interface DeleteState {
    isChanged: boolean;
}

interface Props {
    children: React.ReactNode;
}

export const DeleteProvider = ({ children }: Props) => {
    const [state, setstate] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const changeState = () => {
        setstate(!state)
    }

    const OpenModalAndSaveIdToDelete = (id: string) => {
        localStorage.setItem('idToDelete', id)
        setIsModalOpen(true)
    }

    const DeleteMaqueta = async () => {
        const id = localStorage.getItem('idToDelete')
        await uploadAPI.delete(`/posts/${id}`)
        setIsModalOpen(false)
        changeState()
    }


    return (
        <DeleteContext.Provider value={{
            isChanged: state,
            isModalOpen,
            changeState,
            setIsModalOpen,
            OpenModalAndSaveIdToDelete,
            DeleteMaqueta
        }}>
            {children}
        </DeleteContext.Provider>
    )
}