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
            <Image src={imagen} width={400} height={500} alt='project' className='p-5 ' />

            <Link
                href={`/maqueta/${idposts}`}
                className='absolute  text-2xl font-bold text-white'
            >
                {title}
            </Link>

        </div >

    )
}

export default Projects