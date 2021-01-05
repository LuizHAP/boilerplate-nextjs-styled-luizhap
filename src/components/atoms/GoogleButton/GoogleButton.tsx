import React, { InputHTMLAttributes } from 'react'
import { ButtonWrapper, Button } from '@/styles/components/GoogleButton'

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
}

const GoogleButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <ButtonWrapper>
      <Button>{children}</Button>
    </ButtonWrapper>
  )
}

export default GoogleButton
