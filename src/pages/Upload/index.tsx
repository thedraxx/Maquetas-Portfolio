import Layout from '@/components/Layout/Layout';
import AddProyect from '../../components/UI/AddProyect/AddProyect';
import React from 'react';
import { auth } from '@/components/auth/FirebaseAuth';
import { GetServerSidePropsContext } from 'next';
import AuthLayout from '../../components/Layout/AuthLayout';

const Upload = () => {

    return (
        <AuthLayout
            title='Add Proyect | Add Proyect'
        >
            <div className='flex flex-auto w-auto h-auto justify-center items-center flex-col'>
                <h1 className='text-2xl text-center text-dark mt-10'>Bienvenido Mochilato</h1>
                <AddProyect />
            </div>
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