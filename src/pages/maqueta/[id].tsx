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
                {/* Title and description */}
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


                {/* Materials */}

                <div
                    className='flex justify-center items-center'
                >
                    <div
                        className='sm:flex justify-center items-center w-auto h-auto p-5 flex-col col-auto lg:flex-col xl:flex-col'
                    >

                        <div
                            className='mt-5  text-center flex justify-center items-center w-auto h-auto p-5 flex-col col-auto w-1/3'
                        >
                            <h1
                                className='text-3xl font-bold text-black mb-5'
                            >Materiales</h1>
                            <h2 className='text-xl text-black mb-5 items-center  justify-center first-letter:uppercase '>
                                {project.materials}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* StepByStep */}

                <div
                    className='flex justify-center items-center'
                >
                    <div
                        className='sm:flex justify-center items-center w-auto h-auto p-5 flex-col col-auto lg:flex-col xl:flex-col'
                    >

                        <div
                            className='mt-5  text-center flex justify-center items-center w-auto h-auto p-5 flex-col col-auto w-1/3'
                        >
                            <h1
                                className='text-3xl font-bold text-black mb-5'
                            >Pasos a seguir:</h1>
                            <h2 className='text-xl text-black mb-5 items-center  justify-center first-letter:uppercase '>
                                {
                                    project.stepbystep.includes(',') ?
                                        project.stepbystep.split(',').map((step, index) => (
                                            <div key={index}>
                                                <p>{step}</p>
                                            </div>
                                        ))
                                        :
                                        <div>
                                            <p>{project.stepbystep}</p>
                                        </div>
                                }
                            </h2>
                        </div>
                    </div>
                </div>


                {/* Images */}
                <div
                    className='grid content-around  w-auto sm:grid-cols-1 justify-center items-center  md:grid-cols-2 gap-2 lg:grid-cols-4 gap-4 '
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
                                    height: 'calc(2vh - 60px)',
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
        fallback: 'blocking',
    }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { data } = await uploadAPI.get<IProyects>(`/posts/${params?.id}`)

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: true
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