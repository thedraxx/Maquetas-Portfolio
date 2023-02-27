import Layout from '@/components/Layout/Layout'
import React from 'react'
import ContainerImg from '@/components/UI/ContainerImg/ContainerImg';
import Projects from '@/components/UI/Projects/Projects';
import { GetStaticProps } from 'next'
import uploadAPI from '@/api/uploadApi';
import { IProyects } from '@/interface';

interface Props {
  proyects: IProyects[]
}


const index = ({ proyects }: Props) => {

  return (

    <Layout
      title='Home | Portafolio'
      description='Portafolio de proyectos'
    >
      <ContainerImg
        proyects={proyects}
      />

      <div className='grid content-around m-5 w-auto  sm:grid-cols-1 gap-1 md:grid-cols-2 gap-2 lg:grid-cols-3 gap-3 odd:bg-white even:bg-slate-50'>
        {
          proyects.map((proyect) => (
            <Projects
              key={proyect.idposts}
              id={proyect.idposts}
              title={proyect.title}
              image={proyect.img}
            />
          ))
        }
      </div>
    </Layout>
  )
}


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await uploadAPI.get('/posts')

  return {
    props: {
      proyects: data

    }
  }
}



export default index