import React, { useEffect, useState, useContext } from 'react'
import AuthLayout from '../../components/Layout/AuthLayout';
import uploadAPI from '@/api/uploadApi';
import { IProyects } from '@/interface';
import ProjectsToDelete from '@/components/UI/Projects/ProjectsToDelete';
import { DeleteContext } from '@/components/context/Delete';
import { auth } from '@/components/auth/FirebaseAuth';
import { GetServerSidePropsContext } from 'next';


const Delete = () => {

    const { isChanged } = useContext(DeleteContext)

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
            <div className='bg-navbar grid content-around p-16 w-auto  sm:grid-cols-1 gap-1 md:grid-cols-2 gap-2 lg:grid-cols-3 gap-3 odd:bg-white even:bg-slate-50'>
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


        </AuthLayout>
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