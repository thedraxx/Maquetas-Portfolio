import React, { useEffect, useState, useContext } from 'react'
import AuthLayout from '../../components/Layout/AuthLayout';
import uploadAPI from '@/api/uploadApi';
import { IProyects } from '@/interface';
import ProjectsToDelete from '@/components/UI/Projects/ProjectsToDelete';
import { DeleteContext } from '@/components/context/Delete';
import { auth } from '@/components/auth/FirebaseAuth';
import { GetServerSidePropsContext } from 'next';
import Modal from 'react-modal';
import Footer from '../../components/UI/Footer/Footer';

const Delete = () => {

    const { isChanged, isModalOpen, setIsModalOpen, DeleteMaqueta } = useContext(DeleteContext)

    const [maquetas, setMaquetas] = useState<IProyects[]>([])

    useEffect(() => {
        checkMaquetas()
    }, [isChanged])


    const checkMaquetas = async () => {
        const { data } = await uploadAPI.get('/posts')
        setMaquetas(data)
    }


    return (
        <AuthLayout
            title='Delete Proyect | Delete Proyect'
        >
            <Modal

                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                overlayClassName='bg-black bg-opacity-50 fixed inset-0 z-10'
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '500px',
                        height: '300px',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px'
                    }
                }}
            >
                <h2>Estas seguro de querer eliminar el proyecto?</h2>
                <div
                    className='flex flex-row'>
                    <button className='p-5 ml-5 mr-5' onClick={() => setIsModalOpen(false)}>No</button>
                    <button className='p-5 ml-5 mr-5' onClick={() => DeleteMaqueta()}>Si</button>
                </div>
            </Modal>

            <div
                style={{
                    width: '100%',
                    height: '100%',

                }}
            >



                <div>
                    {

                        maquetas.length === 0 ?
                            <div
                                style={{
                                    width: "100%",
                                    height: "calc(100vh - 200px)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <h1 className='text-2xl text-center items-center justify-center text-dark mt-10'>No hay proyectos</h1>

                            </div>
                            :
                            <div

                                className='w-100 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 pb-24'
                            >
                                {
                                    maquetas.map((proyect) => (
                                        <ProjectsToDelete
                                            key={proyect.idposts}
                                            idposts={proyect.idposts}
                                            title={proyect.title}
                                            img={proyect.img}
                                        />
                                    ))
                                }
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </AuthLayout >
    )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {

    await auth.onAuthStateChanged((user) => {
        if (!user) {
            context.res.writeHead(302, { Location: '/login' });
            context.res.end();
        }
    })

    return {
        props: {
            user: "Auth"
        },
    }
}


export default Delete