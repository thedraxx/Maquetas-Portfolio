import React, { useContext, useState } from 'react';
import { UploadContext } from '@/components/context/Upload';
import uploadAPI from '@/api/uploadApi';
import { LoginContext } from '@/components/context/Login/LoginContext';

const AddProyect = () => {
    const { StartLogout } = useContext(LoginContext)
    const { handleAddMaqueta, urlOfImages, isValid, clearProyect } = useContext(UploadContext);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [materials, setMaterials] = useState<string>("")
    const [stepbystep, setStepbystep] = useState<string>("")


    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newMaqueta = {
            title,
            description,
            img: urlOfImages.toString(),
            materials,
            stepbystep
        }

        const newMaquetaJSON = JSON.stringify(newMaqueta);

        // hacer peticion axios para crear un nuevo proyecto
        const uploadProyect = await uploadAPI.post('/posts',
            newMaquetaJSON,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
        console.log(uploadProyect);

        // reseteo los valores
        setTitle('');
        setDescription('');
        setMaterials('');
        setStepbystep('');
        clearProyect();
    }

    return (
        <div className='flex flex-col col-auto'

        >
            <form
                className='flex flex-col col-auto  mt-10'
            >
                <h1 className=' text-xl text-center text-dark'>Agrega Tu Proyecto!</h1>
                <input
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    placeholder="Nombre del proyecto"
                    name='Nombre Del Proyecto'
                    onChange={({ target }) => setTitle(target.value)}
                    value={title}
                />
                <textarea
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    placeholder="Descripcion del Proyecto"
                    name='Descripcion del Proyecto'
                    onChange={({ target }) => setDescription(target.value)}
                    value={description}
                />

                <textarea
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    placeholder="Materiales Usados"
                    name='Materiales Usados'
                    onChange={({ target }) => setMaterials(target.value)}
                    value={materials}
                />

                <textarea
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    placeholder="Paso A Paso"
                    name='Paso A Paso'
                    onChange={({ target }) => setStepbystep(target.value)}
                    value={stepbystep}
                />

                <input
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    type="file"
                    multiple
                    onChange={(e) => handleAddMaqueta(e.target.files)}
                />

                <button
                    type="submit"
                    onClick={(e) => handleAdd(e)}
                    disabled={isValid}
                    className={`${isValid ? 'bg-gray mt-2 mb-5 p-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' : 'bg-blue mt-2 mb-5 p-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'}`}
                >
                    Cargar Proyecto
                </button>
            </form>

            <button
                onClick={(e) => StartLogout()}
                className='bg-red mt-2 mb-5 p-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
            >
                Salir
            </button>
        </div>
    )
}

export default AddProyect