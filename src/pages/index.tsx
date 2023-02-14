import Layout from '@/components/Layout/Layout'
import React from 'react'
import InfoUsser from '../components/UI/InfoUsser/InfoUsser';
import ContainerImg from '@/components/UI/ContainerImg/ContainerImg';
import Projects from '@/components/UI/Projects/Projects';

const index = () => {
  return (

    <Layout>
      <ContainerImg />
      <Projects />
    </Layout>

  )
}

export default index