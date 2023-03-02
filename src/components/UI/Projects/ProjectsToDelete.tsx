import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { IProyects } from '@/interface';
import uploadAPI from '@/api/uploadApi';

interface Props {
    idposts: string
    title: string
    img: string
}

const ProjectsToDelete = ({ idposts, title, img }: Props) => {
    const [confirm, setConfirm] = useState(false)

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

    const deleteProyect = async (idposts: string) => {
        try {
            await uploadAPI.delete(`/posts/${idposts}`)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='relative flex justify-center flex-col items-center w-auto h-auto mb-24'>
            <button
                onClick={() => deleteProyect(idposts)}
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