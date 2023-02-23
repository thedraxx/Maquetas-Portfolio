import React from 'react'
import Image from 'next/image';
import InfoUsser from '../InfoUsser/InfoUsser';
// 
const ContainerImg = () => {
    return (
        <>
            <div className="flex flex-1 justify-center items-center content-center bg-black h-auto  sm:p-0 lg:p-24">
                <div className='relative'>
                    <img
                        style={{
                            borderRadius: '10%',
                            filter: 'blur(25px)',
                        }}
                        className="object-fill "
                        src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg'
                        alt='Picture of the author'
                        width={950}
                        height={800}
                        placeholder="blur"
                    />

                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}>
                        <InfoUsser />
                    </div>
                </div>


            </div>
        </>
    )
}

export default ContainerImg