import { useState } from 'react';
import { DeleteContext } from './';

export interface DeleteState {
    isChanged: boolean;
}

interface Props {
    children: React.ReactNode;
}

export const DeleteProvider = ({ children }: Props) => {
    const [state, setstate] = useState(false)

    const changeState = () => {
        setstate(!state)
    }


    return (
        <DeleteContext.Provider value={{
            isChanged: state,
            changeState
        }}>
            {children}
        </DeleteContext.Provider>
    )
}