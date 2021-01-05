import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '@/hooks/useAuth'

import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

import 'react-toastify/dist/ReactToastify.min.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          newestOnTop
          closeOnClick
          rtl={false}
          draggable={false}
          pauseOnHover
        />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
