import React, { useEffect, useState } from 'react';
import LoginHelper from '../../../helpers/LoginHelper';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);
    const { handlesSubmit, setError, error } = LoginHelper();

    useEffect(() => {
        if (email.trim().length > 0 && password.trim().length > 0) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [email, password])

    return (
        <div className='flex flex-col col-auto mb-96'
            style={{
                height: 'calc(50vh - 4rem)',
            }}
        >
            <form
                className='flex flex-col col-auto col-span-1 mt-10'
            >
                <h1 className=' text-xl text-center text-dark mb-1'>Iniciar sesion</h1>
                <input
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    placeholder="Email"
                    name='email'
                    onChange={({ target }) => setEmail(target.value)}
                    value={email}
                />
                <input
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    placeholder="Contrasena"
                    name='contrasena'
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                />

                <button
                    className={`
                        ${isValid ? 'mt-2 mb-5 p-5 bg-gray rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 trasition duration-500 ease-in-out ' : 'mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 trasition duration-500 ease-in-out hover:bg-blue-500 hover:text-primary'}
                    `}
                    // className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    type="submit"
                    onClick={(e) => handlesSubmit(e, email, password)}
                    disabled={isValid}>
                    Login
                </button>


            </form>
            {
                error && (
                    <div className='flex flex-col col-auto col-span-1 mt-10 bg-red rounded-3xl'>
                        <button className='p-5 bg-red rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-white' onClick={() => setError(false)}>A ocurrido un Error</button>
                    </div>
                )
            }
        </div>
    );
}

export default Login