import AddProyect from '../../components/UI/AddProyect/AddProyect';
import React, { useContext } from 'react';
import { auth } from '@/components/auth/FirebaseAuth';
import { GetServerSidePropsContext } from 'next';
import AuthLayout from '../../components/Layout/AuthLayout';
import Modal from 'react-modal';
import { UploadContext } from '../../components/context/Upload/UploadContext';
import Footer from '@/components/UI/Footer/Footer';

const Upload = () => {

    const { handleActiveAlert, activateAlert } = useContext(UploadContext)

    return (
        <AuthLayout
            title='Add Proyect | Add Proyect'
        >
            <Modal
                isOpen={activateAlert}
                onRequestClose={() => handleActiveAlert()}
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
                <h2>Se a cargado el proyecto</h2>
                <div
                    className='flex flex-row'>
                    <button className='p-5 ml-5 mr-5' onClick={() => handleActiveAlert()}>ok</button>
                </div>
            </Modal>

            <div className='flex flex-auto w-auto h-auto justify-center items-center flex-col'>
                <h1 className='text-2xl text-center text-dark mt-10'>Bienvenido Mochilato</h1>
                <AddProyect />
            </div>
            <Footer />
        </AuthLayout>

    );
};



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





export default Upload;