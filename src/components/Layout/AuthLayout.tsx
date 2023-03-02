import Head from 'next/head'
import React from 'react'
import AuthNavbar from '../UI/Navbar/AuthNavbar';


interface LayoutProps {
    children: React.ReactNode,
    title: string,
}


const AuthLayout = ({ children, title }: LayoutProps) => {

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <AuthNavbar />

            <main
                style={{
                    backgroundColor: '#d6d6d6',
                }}
            >
                {children}
            </main>
        </>
    )
}

export default AuthLayout