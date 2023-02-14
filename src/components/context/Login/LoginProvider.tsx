import { useReducer } from 'react';
import { LoginReducer } from './LoginReducer';
import { LoginContext } from './LoginContext';

export interface LoginState {
    isLoggin: boolean;
}

const Login_INITIAL_STATE: LoginState = {
    isLoggin: false,
};

interface Props {
    children: React.ReactNode;
}

export const LoginProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(LoginReducer, Login_INITIAL_STATE)

    return (
        <LoginContext.Provider value={{
            ...state
        }}>
            {children}
        </LoginContext.Provider>
    )
}