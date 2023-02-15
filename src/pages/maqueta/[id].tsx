import React from 'react'
import Layout from '../../components/Layout/Layout';

const maqueta = () => {
    return (
        <Layout>
            <div
                className='flex justify-center items-center'
            >
                <div
                    className='flex justify-center items-center w-auto h-auto p-5 flex-col col-auto '
                >
                    <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={700} height={700} alt='project' className='p-5 rounded-xl' />
                    <h1>Titulo</h1>
                    <p>Descripcion</p>

                </div>



            </div>

            <div className='grid content-around m-5 w-auto  sm:grid-cols-1 gap-1 md:grid-cols-2 gap-2 lg:grid-cols-3 gap-3 odd:bg-white even:bg-slate-50  '>
                <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={700} height={700} alt='project' className='p-5 rounded-xl' />
                <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={700} height={700} alt='project' className='p-5 rounded-xl' />
                <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={700} height={700} alt='project' className='p-5 rounded-xl' />

            </div>

        </Layout>
    )
}

export default maqueta