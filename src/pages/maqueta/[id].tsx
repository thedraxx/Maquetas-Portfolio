
import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout';
import { GetStaticPaths, GetStaticProps } from 'next'
import uploadAPI from '@/api/uploadApi';
import { IProyects } from '@/interface';
import Image from 'next/image';
import 'animate.css';
interface Props {
    project: IProyects
}

const Maqueta = ({ project }: Props) => {

    const [isInView, setIsInView] = useState<boolean>(false);

    useEffect(() => {
        const element = document.getElementById("element-to-animate");
        const onScroll = () => {
            const rect = element?.getBoundingClientRect();
            if (rect?.top! >= 0 && rect?.bottom! <= window.innerHeight) {
                setIsInView(true);
            } else {
                setIsInView(true);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])



    return (
        <>
            <Layout
                title={project.title}
                description={project.description}
            >
                {/* Title and description */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: 'auto',
                        backgroundColor: '#F5F5F5',
                    }}

                >
                    <div
                        className='mt-5 sm:flex justify-center items-center w-auto h-auto p-5 flex-col col-auto lg:flex-row xl:flex-row'
                    >
                        <Image
                            src={
                                project.img.includes(',') ?
                                    project.img.slice(0, project.img.indexOf(','))
                                    :
                                    project.img

                            } width={300} height={300} alt='project' className='animate__animated animate__bounceIn '
                            style={{
                                borderRadius: '25px',
                                border: 'none',
                                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                            }} />

                        <div
                            id='element-to-animate'
                            className={"text-center flex justify-center items-center w-auto h-auto p-5 flex-col col-auto w-1/3 "}

                        >
                            <h1
                                className={`text-4xl font-bold text-black mb-5 animate__animated ml-5  ${isInView ? 'animate__fadeInRight' : ''}`}
                            >{project.title}</h1>
                            <h2 className={`text-xl ml-5  text-black mb-5 items-center  justify-center first-letter:uppercase animate__animated  ${isInView ? 'animate__fadeInRight' : ''}`} >
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
                        className={"sm:flex justify-center items-center w-52 h-auto p-5 flex-col col-auto lg:flex-col xl:flex-col  "}
                    >

                        <div
                            className='mt-5  text-center flex justify-center items-center w-auto h-auto p-5 flex-col col-auto w-1/3'
                        >
                            <h1
                                className={`text-3xl font-bold text-black mb-5 animate__animated  ${isInView ? 'animate__fadeInRight' : ''}`}
                            >Materiales</h1>
                            <h2 className={`text-xl text-black mb-5 items-center  justify-center first-letter:uppercase animate__animated  ${isInView ? 'animate__fadeInRight' : ''}`}
                            >
                                {project.materials}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* StepByStep */}

                <div
                    className={`flex justify-center items-center `}
                >
                    <div
                        className='sm:flex justify-center items-center w-auto h-auto p-5 flex-col col-auto lg:flex-col xl:flex-col'
                    >

                        <div
                            className='text-center flex justify-center items-center w-auto h-auto p-5 flex-col col-auto'
                        >
                            <h1
                                className={`text-3xl font-bold text-black mb-5 animate__animated  ${isInView ? 'animate__fadeInLeft' : ''}`}
                            >Pasos a seguir:</h1>
                            <h2 className={`text-xl text-black mb-5 items-center  justify-center first-letter:uppercase animate__animated  ${isInView ? 'animate__fadeInLeft' : ''}`}
                            >
                                {
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
                    className='grid content-around w-auto p-5 sm:grid-cols-1 gap-1 ustify-center items-center  md:grid-cols-2 gap-2 lg:grid-cols-3 gap-4 '
                >
                    {
                        project.img.includes(',') ?
                            project.img.slice(project.img.indexOf(',') + 1).split(',').map((img, index) => (
                                <div
                                    key={index}
                                    className='scale-90  hover:scale-100 transition-all duration-500'
                                >
                                    <Image
                                        key={index}
                                        src={img} width={420} height={400} alt='project' className='p-5 rounded-xl' />

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




export default Maqueta