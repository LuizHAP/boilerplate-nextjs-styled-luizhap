import React from 'react'

import { Layout } from '@/components/templates'
import { Container } from '@/styles/pages/Login'
import { SliderContainer, SignUpContainer } from '@/components/organisms'

const Home: React.FC = () => {
  return (
    <Layout title="SignUp - Zappts Frontend">
      <Container>
        <SliderContainer />
        <SignUpContainer />
      </Container>
    </Layout>
  )
}

export default Home
