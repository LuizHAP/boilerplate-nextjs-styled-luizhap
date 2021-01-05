import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonSignIn = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.background};
    font-size: ${theme.font.sizes.xsmall};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    transition: background 0.3s ease-in-out;
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall};
    cursor: pointer;
    outline: none;
    width: 50%;
    margin-top: ${theme.spacings.small};
  `}
  @media screen and (min-width: 411px) {
    width: 8vw;
  }
`
