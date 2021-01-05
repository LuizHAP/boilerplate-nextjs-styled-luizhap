import React, { useCallback, useRef } from 'react'
import {
  Container,
  Logo,
  Title,
  ForgotPassword,
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

const LoginContainer = (): JSX.Element => {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit = useCallback(async (data: any) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().email().required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
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
        <Title>Welcome to Invision</Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" type="email" label="Users name or Email" />
          <Input name="password" type="password" label="Password" />
          <ForgotPassword>Forgot password?</ForgotPassword>
          <SignInButton type="submit">Sign in</SignInButton>
        </Form>
        <OrText>Or</OrText>
        <GoogleButton>Sign up with Google</GoogleButton>
        <CreateAccount>
          New <span>Invision</span>? <Link href="/signup">Create Account</Link>
        </CreateAccount>
      </Wrapper>
    </Container>
  )
}

export default LoginContainer
