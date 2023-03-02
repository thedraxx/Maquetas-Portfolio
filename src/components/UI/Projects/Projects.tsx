import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IProyects } from '@/interface';

interface Props {
    idposts: string
    title: string
    img: string
}

const Projects = ({ idposts, title, img }: Props) => {

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
        <div className='relative flex justify-center flex-col items-center w-auto h-auto mb-24'>
            <Link
                href={`/maqueta/${idposts}`}
                className='justify-center items-center flex  flex-col w-auto h-auto '
            >
                <Image src={imagen} width={400} height={500} alt='project' className='p-5 rounded-3xl' />
                <h1 className='capitalize  text-xl font-bold text-black justify-center items-center'>
                    {title}
                </h1>
            </Link>
        </div >
    )
}

export default Projects