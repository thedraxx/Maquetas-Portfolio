import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (

        <div className='flex justify-center items-center w-auto h-auto'>


            <div className='grid content-around m-5 w-auto  sm:grid-cols-1 gap-1 md:grid-cols-2 gap-2 lg:grid-cols-3 gap-3  '>


                <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={500} height={500} alt='project' className='p-5' />
                <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={500} height={500} alt='project' className='p-5' />
                <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={500} height={500} alt='project' className='p-5' />
                <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={500} height={500} alt='project' className='p-5' />
                <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={500} height={500} alt='project' className='p-5' />
                <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={500} height={500} alt='project' className='p-5' />




            </div>
        </div>
    )
}

export default Projects