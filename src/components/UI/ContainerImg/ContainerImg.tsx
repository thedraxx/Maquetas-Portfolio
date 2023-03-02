import Image from 'next/image'
import React from 'react'

const ContainerImg = () => {
    return (
        <div>
            <div className='sm: flex-col flex justify-center items-center bg-darkblue md:flex-row'>
                <div className='sm:flex justify-center items-center w-auto h-auto p-5 flex-col col-auto lg:flex-col xl:flex-col'>
                    <Image
                        src="/images/banner.png"
                        width={1600}
                        height={400}
                        alt='banner image'
                        className='p-5 rounded-3xl'
                    />
                </div>
                <div
                    className='sm:flex justify-center items-center w-auto h-auto p-5 flex-col col-auto lg:items- p-5 '>

                    <h1 className='text-4xl font-bold text-white mb-5'>Serie: Hombres de Mar</h1>

                    <h2 className='text-xl text-white mb-5 first-letter:uppercase '>Bustos en escala 1:6 con temática marinera. Todos ellos están esculpidos con diferentes tipos de masillas y pintados en su mayoría con pinturas acrílicas.</h2>
                    <h3
                        className='text-xl text-white mb-5 first-letter:uppercase '
                    >
                        Con mi trabajo no pretendo precisión histórica ni perfección anatómica, sino transmitir la emoción o el estado de ánimo que sugiere cada nuevo busto que esculpo.
                    </h3>
                </div>

            </div>

        </div>
    )
}

export default ContainerImg