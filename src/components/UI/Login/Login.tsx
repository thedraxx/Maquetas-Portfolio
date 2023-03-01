import { auth } from '@/components/auth/FirebaseAuth';
import { LoginContext } from '@/components/context/Login/LoginContext';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {

    const router = useRouter();
    const { StartLogin } = useContext(LoginContext);
    const [name, setName] = useState<string>('');
    const [usser, setUsser] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);

    const handlesSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (name.trim().length === 0 || usser.trim().length === 0) {
            setIsValid(false);
            return;
        }

        const newUser = {
            name,
            usser,
        }

        //TODO crear peticion axios para crear un nuevo usuario
        const email = name
        const password = usser

        try {
            const resp = await signInWithEmailAndPassword(auth, email, password);

            if (resp.user) {
                StartLogin(resp.user.uid, resp.user.email!);
                router.replace('/Upload');
            }

            console.log("No existe el usuario");

        } catch (error) {

            console.log(error);

        }



    }


    useEffect(() => {
        if (name.trim().length > 0 && usser.trim().length > 0) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [name, usser])



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
                    placeholder="Usuario"
                    name='Usuario'
                    onChange={({ target }) => setName(target.value)}
                    value={name}
                />
                <input
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    placeholder="Contrasena"
                    name='contrasena'
                    onChange={({ target }) => setUsser(target.value)}
                    value={usser}
                />

                <button
                    className={`
                        ${isValid ? 'mt-2 mb-5 p-5 bg-gray rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 trasition duration-500 ease-in-out ' : 'mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 trasition duration-500 ease-in-out hover:bg-blue-500 hover:text-primary'}
                    `}
                    // className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    type="submit"
                    onClick={(e) => handlesSubmit(e)}
                    disabled={isValid}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login