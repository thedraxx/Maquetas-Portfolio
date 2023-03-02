import React from 'react'
import Layout from '../../components/Layout/Layout';
import { GetStaticPaths, GetStaticProps } from 'next'
import uploadAPI from '@/api/uploadApi';
import { IProyects } from '@/interface';
import Image from 'next/image';

interface Props {
    project: IProyects
}

const maqueta = ({ project }: Props) => {

    return (
        <>
            <Layout
                title={project.title}
                description={project.description}
            >
                <div
                    className='flex justify-center items-center'
                >
                    <div
                        className='sm:flex justify-center items-center w-auto h-auto p-5 flex-col col-auto lg:flex-col xl:flex-col'
                    >
                        <Image src={
                            project.img.includes(',') ?
                                project.img.slice(0, project.img.indexOf(','))
                                :
                                project.img

                        } width={700} height={700} alt='project' className='p-5 rounded-xl' style={{
                            borderRadius: '50px',
                            border: 'none',
                            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                        }} />

                        <div
                            className='mt-5  text-center flex justify-center items-center w-auto h-auto p-5 flex-col col-auto w-1/3'
                        >
                            <h1
                                className='text-3xl font-bold text-black mb-5'
                            >{project.title}</h1>
                            <h2 className='text-xl text-black mb-5 items-center  justify-center first-letter:uppercase '>
                                {project.description}
                            </h2>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl font-bold text-black mb-5'>Materiales Usados:</h1>
                    {
                        /*   <ul className='text-xl text-black mb-5 items-center  justify-center first-letter:uppercase '>
                            {
                                project.materials.includes(',') ?
                                    project.materials.split(',').map((material, index) => (
                                        <li key={index}>{material}</li>
                                    ))
                                    :
                                    <li>{project.materials}</li>
                            }
    
                        </ul>  */
                    }
                </div>

                <div
                    className=' grid content-around m-5 w-auto  sm:grid-cols-1 gap-1 md:grid-cols-2 gap-2 lg:grid-cols-3 gap-3 odd:bg-white even:bg-slate-50'
                >
                    {
                        project.img.includes(',') ?
                            project.img.slice(project.img.indexOf(',') + 1).split(',').map((img, index) => (
                                <div
                                    key={index}

                                >
                                    <Image
                                        key={index}
                                        src={img} width={400} height={400} alt='project' className='p-5 rounded-xl' />

                                </div>
                            ))
                            :
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 'calc(50vh - 60px)',
                                }}
                            >
                            </div>
                    }
                </div>

            </Layout>
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {

    const { data } = await uploadAPI.get<IProyects[]>('/posts')

    const paths = data.map((project: any) => ({
        params: { id: project.idposts.toString() }
    }))

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { data } = await uploadAPI.get<IProyects>(`/posts/${params?.id}`)

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            project: data,
            revalidate: 86400
        }
    }
}




export default maqueta