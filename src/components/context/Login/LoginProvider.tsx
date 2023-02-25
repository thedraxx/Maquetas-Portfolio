import { useReducer } from 'react';
import { LoginReducer } from './LoginReducer';
import { LoginContext } from './LoginContext';
import uploadApi from '@/api/uploadApi';

export interface LoginState {
    isLoggedIn: boolean;
}

const Login_INITIAL_STATE: LoginState = {
    isLoggedIn: false,
};

interface Props {
    children: React.ReactNode;
}

export const LoginProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(LoginReducer, Login_INITIAL_STATE)

    const StartLogin = async (usser: string, password: string) => {

        // const login = await uploadApi.post('/login', {
        //     usser,
        //     password
        // })

        // if (!login) {
        //     return false
        // }


        dispatch({
            type: '[Login] - LoginAction',
        })
    }


    const StartLogout = () => {
        dispatch({
            type: '[Login] - LogoutAction',
        })
    }

    return (
        <LoginContext.Provider value={{
            ...state,
            StartLogin,
            StartLogout
        }}>
            {children}
        </LoginContext.Provider>
    )
}