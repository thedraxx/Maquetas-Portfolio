import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

const Login = () => {

    const router = useRouter();

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

        console.log(newUser);

        //TODO: lo redirige a la pantalla para subir una imagen
        router.push('/Upload');
    }


    useEffect(() => {
        if (name.trim().length > 0 && usser.trim().length > 0) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [name, usser])



    return (
        <div className='flex flex-col col-auto'>
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
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
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