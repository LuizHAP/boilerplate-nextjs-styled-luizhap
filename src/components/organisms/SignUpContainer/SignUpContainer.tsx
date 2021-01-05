import React, { useCallback, useRef } from 'react'
import {
  Container,
  Logo,
  Title,
  Wrapper,
  OrText,
  CreateAccount
} from '@/styles/components/LoginContainer'
import { Input, SignInButton, GoogleButton } from '@/components/atoms'

import { Form } from '@unform/web'

import getValidationErrors from '@/utils/getValidationErrors'

import * as Yup from 'yup'

import { FormHandles } from '@unform/core'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { useAuth } from 'hooks/useAuth'

import { toast } from 'react-toastify'

const SignUpContainer = (): JSX.Element => {
  const auth = useAuth()
  const router = useRouter()
  const formRef = useRef<FormHandles>(null)
  const handleSubmit = useCallback(async (data: any) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        fullname: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email().required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      return auth.signUp(data).then(() => {
        toast.success('Cadastro realizado com sucesso')
        router.push('/')
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
    }
  }, [])

  return (
    <Container>
      <Logo>Invision</Logo>
      <Wrapper>
        <Title>Getting Started</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="fullname" type="text" label="Full Name" />
          <Input name="email" type="email" label="Users name or Email" />
          <Input name="password" type="password" label="Password" />
          <SignInButton type="submit">Sign Up</SignInButton>
        </Form>
        <OrText>Or</OrText>
        <GoogleButton>Sign up with Google</GoogleButton>
        <CreateAccount>
          By signing up, you agree to <span>Invision</span> <br />
          <Link href="/terms">Terms of Conditions</Link> and{' '}
          <Link href="/privacy">Privacy Policy</Link>
        </CreateAccount>
      </Wrapper>
    </Container>
  )
}

export default SignUpContainer
