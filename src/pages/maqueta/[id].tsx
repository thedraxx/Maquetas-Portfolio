import React from 'react'
import Layout from '../../components/Layout/Layout';
// 
const maqueta = () => {
    return (
        <Layout
            title='Maqueta'
            description='Esta es la pagina de la maqueta'
        >
            <div
                className='flex justify-center items-center'
            >
                <div
                    className='sm:flex justify-center items-center w-auto h-auto p-5 flex-col col-auto lg:flex-row'
                >
                    <img src='https://www.iamanufacturing.com/wp-content/uploads/2021/08/maqueta-ensayos-ingenieria-solar.jpg' width={700} height={700} alt='project' className='p-5 rounded-xl' style={{
                        borderRadius: '50px',

                        border: 'none',
                        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',

                    }} />

                    <div
                        className='flex justify-center items-center w-auto h-auto p-5 flex-col col-auto w-1/3'
                    >
                        <h1
                            className='text-3xl font-bold text-black mb-5'
                        >Maqueta General de Torre</h1>
                        <h2 className='text-xl text-black mb-5 items-center  justify-center first-letter:uppercase '>
                            Esta maqueta fue disenada con el proposito de ser la mas copada del mundo, cuenta con 5 espacios y habitaciones, tambien esta hecha de acero
                        </h2>
                    </div>


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