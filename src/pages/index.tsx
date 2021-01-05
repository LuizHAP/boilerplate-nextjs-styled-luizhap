import React from 'react'

import { Layout } from '@/components/templates'
import { Container } from '@/styles/pages/Login'
import { SliderContainer, LoginContainer } from '@/components/organisms'

const Home: React.FC = () => {
  return (
    <Layout title="Login - Zappts Frontend">
      <Container>
        <SliderContainer />
        <LoginContainer />
      </Container>
    </Layout>
  )
}

export default Home
