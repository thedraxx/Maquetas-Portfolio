import Layout from '@/components/Layout/Layout'
import React from 'react'

const Page404 = () => {
    return (
        <Layout
            title='Error 404 | Pagina No Encontrada'
            description='Error 404 | Pagina No Encontrada'
        >
            <div
                className='flex flex-col justify-center items-center h-screen w-full'
            >
                <div
                    className='flex flex-col justify-center items-center h-1/2 w-full'
                >
                    <h1 className='text-3xl font-bold text-black mb-5'>Error 404 |</h1>
                    <h1 className='text-1xl font-bold text-black mb-5 ml-2'> Pagina No Encontrada </h1>
                </div>

            </div>



        </Layout>
    )
}

export default Page404