import React, { useEffect, useState } from 'react'
import AuthLayout from '../../components/Layout/AuthLayout';
import { auth } from '@/components/auth/FirebaseAuth';
import { GetServerSidePropsContext } from 'next';
import uploadAPI from '@/api/uploadApi';
import { IProyects } from '@/interface';
import Projects from '@/components/UI/Projects/Projects';
import ProjectsToDelete from '@/components/UI/Projects/ProjectsToDelete';

interface Props {
    proyects: IProyects[]
}


const Delete = () => {

    const [maquetas, setMaquetas] = useState<IProyects[]>([])


    useEffect(() => {
        checkMaquetas()
    }, [])


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




export default Delete