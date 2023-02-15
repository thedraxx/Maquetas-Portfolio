import React, { useContext, useState } from 'react';
import { UploadContext } from '@/components/context/Upload';
import uploadAPI from '@/api/UploadApi';

const AddProyect = () => {


    const { handleAddMaqueta, urlOfImages, isValid, clearProyect } = useContext(UploadContext);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newMaqueta = {
            title,
            description,
            img: urlOfImages
        }

        //TODO hacer peticion axios para crear un nuevo proyecto
        console.log(newMaqueta);


        // TODO ESTA VERGA NO ANDA
        // const uploadProyect = await uploadAPI.post('projects/', {
        //     title: "titulo desde api",
        //     description: "desde api",
        //     technology: 'React',
        // });


        // console.log(uploadProyect);

        setTitle('');
        setDescription('');
        clearProyect();
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
                    type="submit"
                    onClick={(e) => handleAdd(e)}
                    disabled={isValid}
                    className={`${isValid ? 'bg-gray mt-2 mb-5 p-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' : 'bg-blue mt-2 mb-5 p-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'}`}
                >
                    Cargar Proyecto
                </button>
            </form>
        </div>
    )
}

export default AddProyect