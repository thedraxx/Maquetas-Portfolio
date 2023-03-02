import React from 'react'
import AuthLayout from '../../components/Layout/AuthLayout';
import { auth } from '@/components/auth/FirebaseAuth';
import { GetServerSidePropsContext } from 'next';


const Delete = () => {
    return (
        <AuthLayout
            title='Delete Proyect | Delete Proyect'
        >Delete</AuthLayout>
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