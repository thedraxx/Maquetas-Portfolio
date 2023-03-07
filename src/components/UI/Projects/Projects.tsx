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
        <div className='relative flex justify-center flex-col items-center w-auto h-auto mb-24 scale-90  hover:scale-100 transition-all '>
            <Link
                href={`/maqueta/${idposts}`}
                className='justify-center items-center flex  flex-col w-auto h-auto '
            >
                <Image
                    src={imagen}
                    width={280}
                    height={350}
                    alt='project'
                    style={{
                        borderRadius: '25px',
                        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                        border: 'none'


                    }}

                />
                <h1 className='capitalize  text-xl font-bold text-black justify-center items-center'>
                    {title}
                </h1>
            </Link>
        </div >
    )
}

export default Projects