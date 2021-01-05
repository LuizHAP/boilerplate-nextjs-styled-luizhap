import React, { InputHTMLAttributes } from 'react'
import { ButtonWrapper, ButtonSignIn } from '@/styles/components/SignInButton'

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
}

const SignInButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <ButtonWrapper>
      <ButtonSignIn>{children}</ButtonSignIn>
    </ButtonWrapper>
  )
}

export default SignInButton
