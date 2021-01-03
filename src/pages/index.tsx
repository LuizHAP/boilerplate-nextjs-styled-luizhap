import React from 'react'

import { Layout } from '@/components/templates'
import { Container } from '@/styles/pages/Login'
import { LeftContainer } from '@/components/organisms'

const Home: React.FC = () => {
  return (
    <Layout title="Login - Zappts Frontend">
      <Container>
        <LeftContainer />
      </Container>
    </Layout>
  )
}

export default Home
