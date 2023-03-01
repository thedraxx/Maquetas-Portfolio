import Layout from '@/components/Layout/Layout';
import AddProyect from '../../components/UI/AddProyect/AddProyect';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { LoginContext } from '../../components/context/Login/LoginContext';


interface Props {
    isLogged: Boolean
}


const Upload = ({ isLogged }: Props) => {
    const { isLoggedIn } = useContext(LoginContext);
    console.log(isLoggedIn);

    // const router = useRouter();

    // if (!isLoggedIn) {
    //     router.replace('/login')
    //     return null
    // }




    return (
        <Layout
            title='Add Proyect | Add Proyect'
            description='Add your Proyect'

        >
            <div className='flex flex-auto w-auto h-auto justify-center items-center'>
                <AddProyect />
            </div>
        </Layout>

    );
};



export async function getServerSideProps(context: any) {

    const { req, res } = context

    console.log(req.headers.cookie)

    // TODO: Hacer la peticion 
    // const validate = await fetch('http://localhost:3000/api/validate', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Cookie': req.headers.cookie
    //     },
    //     body: JSON.stringify({
    //         token: req.headers.cookie
    //     })
    // })

    // const data = await validate.json()

    // console.log(data)

    // if (!data ){
    //     return {
    //         redirect: {
    //             destination: '/login',
    //             permanent: false,
    //         },
    //     }
    // }

    const isLogged = true

    if (!isLogged) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }

    return {
        props: {
            isLogged,
        },
    }
}





export default Upload;