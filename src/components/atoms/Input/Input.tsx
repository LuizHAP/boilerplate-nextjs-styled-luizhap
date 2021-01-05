import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { Container, Error } from '@/styles/components/Input'

import { useField } from '@unform/core'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      {error && <Error>{error}</Error>}
      <label htmlFor={name}>{label}</label>
      <input defaultValue={defaultValue} ref={inputRef} name={name} {...rest} />
    </Container>
  )
}

export default Input
