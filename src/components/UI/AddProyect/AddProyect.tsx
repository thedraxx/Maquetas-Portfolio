import React, { useContext, useState } from 'react';
import { UploadContext } from '@/components/context/Upload';

const AddProyect = () => {

    const { handleAddMaqueta, urlOfImages, isValid } = useContext(UploadContext);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newMaqueta = {
            title,
            description,
            urlOfImages
        }

        //TODO hacer peticion axios para crear un nuevo proyecto
        console.log(newMaqueta);

        console.log(urlOfImages);
    }

    return (
        <div className='flex flex-col col-auto'>
            <form
                className='flex flex-col col-auto col-span-1 mt-10'
            >
                <h1 className=' text-xl text-center text-dark'>Agrega Tu Proyecto!</h1>
                <input
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    placeholder="Nombre del proyecto"
                    name='Nombre Del Proyecto'
                    onChange={({ target }) => setTitle(target.value)}
                    value={title}
                />
                <input
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    placeholder="Descripcion del Proyecto"
                    name='search'
                    onChange={({ target }) => setDescription(target.value)}
                    value={description}
                />

                <input
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    type="file"
                    multiple
                    onChange={(e) => handleAddMaqueta(e.target.files)}
                />

                <button
                    className='mt-2 mb-5 p-5 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
                    type="submit"
                    onClick={(e) => handleAdd(e)}
                    disabled={isValid}>
                    Cargar Proyecto
                </button>
            </form>
        </div>
    )
}

export default AddProyect