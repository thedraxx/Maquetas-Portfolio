import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Footer from '../Footer/Footer';

interface Props {
    title: string;
    image: string;
    id: number;
}

const Projects = ({ title, image, id }: Props) => {

    let imagen = ""

    // Eliminamos lo que haya despues de la coma

    if (image.includes(',')) {
        const letraEliminar = ","
        let posicion = image.indexOf(letraEliminar)
        imagen = image.slice(0, posicion)
    }

    else {
        imagen = image
    }

    return (

        <div className='relative flex justify-center flex-col items-center w-auto h-auto mb-24   '
        >
            <Image src={imagen} width={400} height={500} alt='project' className='p-5 ' />
            <Link
                href={`/maqueta/${id}`}
                className='absolute  text-2xl font-bold text-white'
            >
                {title}
            </Link>

        </div >

    )
}

export default Projects