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
      <ContainerImg />

      {
        proyects.length === 0 && (
          <div
            style={{
              width: "100%",
              height: "calc(100vh - 500px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <h1 className='text-2xl text-center items-center justify-center text-dark mt-10'>No hay proyectos</h1>

          </div>
        )
      }

      <div className='w-100 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 pb-24'>
        {
          proyects.map((proyect) => (
            <Projects
              key={proyect.idposts}
              idposts={proyect.idposts}
              title={proyect.title}
              img={proyect.img}
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

export const getServerSideProps: GetStaticProps = async (ctx) => {

  const { data } = await uploadAPI.get('/posts')

  return {
    props: {
      proyects: data

    }
  }
}




export default index