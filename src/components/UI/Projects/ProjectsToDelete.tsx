import Image from 'next/image';
import React, { useState, useContext } from 'react'
import { DeleteContext } from '@/components/context/Delete';

interface Props {
    idposts: string
    title: string
    img: string
}

const ProjectsToDelete = ({ idposts, title, img }: Props) => {

    const { OpenModalAndSaveIdToDelete } = useContext(DeleteContext)

    let imagen = ""
    // Eliminamos lo que haya despues de la coma
    if (img.includes(',')) {
        const letraEliminar = ","
        let posicion = img.indexOf(letraEliminar)
        imagen = img.slice(0, posicion)
    }

    else {
        imagen = img
    }

    return (
        <div className=' relative flex justify-center flex-col items-center w-auto h-auto mb-24'>
            <button
                onClick={() => OpenModalAndSaveIdToDelete(idposts)}
                className='justify-center items-center flex  flex-col w-auto h-auto '
            >
                {
                    imagen === "" ? (
                        <div className='w-80 h-80 bg-gray-200 rounded-xl flex justify-center items-center'>
                            <h1 className='text-2xl font-bold text-gray-500'>No hay imagen</h1>
                        </div>
                    ) : (
                        <Image src={imagen} width={400} height={500} alt='project' className='p-5 rounded-3xl' />
                    )
                }
                <h1 className='capitalize  text-xl font-bold text-black justify-center items-center'>
                    {title}
                </h1>
            </button>
        </div >
    )
}

export default ProjectsToDelete