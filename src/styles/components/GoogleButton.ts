import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    background: ${theme.colors.background};
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.text};
    color: ${theme.colors.text};
    box-shadow: 0px 2px 4px ${theme.colors.text};
    font-size: ${theme.font.sizes.xsmall};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    font-family: Lato;
    transition: background 0.3s ease-in-out;
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall};
    cursor: pointer;
    outline: none;
    width: 50%;
    margin-top: ${theme.spacings.small};
    &:hover {
      box-shadow: 0px 3px 6px;
    }
  `}
  @media screen and (min-width: 411px) {
    width: 40%;
  }
`
