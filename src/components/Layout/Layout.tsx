import Head from 'next/head'
import React from 'react'
import Navbar from '../UI/Navbar/Navbar';
import Footer from '../UI/Footer/Footer';


interface LayoutProps {
    children: React.ReactNode,
    title: string,
    description: string,
}

const origin = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : ''

const Layout = ({ children, title = "xd", description = "xd", }: LayoutProps) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="app" content={description} />
                <meta name="descripcion" content={description} />
                <meta name="keywords" content={title} />
                <meta property="og:title" content={`Bienvenido Navegante`} />
                <meta property="og:description" content={`Esto es un portfolio`} />
                <meta property="og:image" content={origin} />

            </Head>
            <Navbar />

            <main
                style={{
                    backgroundColor: '#d6d6d6',
                }}
            >
                {children}
            </main>


            <Footer />

        </>
    )
}

export default Layout