import uploadAPI from '@/api/uploadApi';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Projects = () => {


    useEffect(() => {
        elsexo();
    }, [])


    const elsexo = async () => {
        // const uploadProyect = await uploadAPI('projects/');
        // console.log(uploadProyect);
    }

    return (

        <div className='  flex justify-center items-center w-auto h-auto'>
            <div className='grid content-around m-5 w-auto  sm:grid-cols-1 gap-1 md:grid-cols-2 gap-2 lg:grid-cols-3 gap-3 odd:bg-white even:bg-slate-50  '>

                <div className='relative flex justify-center flex-col items-center w-auto h-auto '>
                    <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={500} height={500} alt='project' className='p-5 ' />
                    <Link
                        href={`/maqueta/${246}`}
                        className='absolute  text-2xl font-bold text-white'
                    >
                        Proyecto 2
                    </Link>

                </div>


                <div className='relative flex justify-center flex-col items-center w-auto h-auto '>
                    <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={500} height={500} alt='project' className='p-5 ' />
                    <Link
                        href={`/maqueta/${24}`}
                        className='absolute  text-2xl font-bold text-white'
                    >
                        Proyecto 2
                    </Link>
                </div>



                <div className='relative flex justify-center flex-col items-center w-auto h-auto '>
                    <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={500} height={500} alt='project' className='p-5 ' />
                    <Link
                        href={`/maqueta/${244}`}
                        className='absolute  text-2xl font-bold text-white'
                    >
                        Proyecto 2
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Projects