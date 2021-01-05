import styled, { css } from 'styled-components'
export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    & + div {
      margin-top: ${theme.spacings.xsmall};
    }

    &:after {
      height: 1px;
      content: '';
      background: ${theme.colors.primary};
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 1rem;
    }

    label {
      margin-left: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.primary};
    }

    input {
      width: 100%;
      height: 5.6rem;
      border-radius: 0.8rem;
      outline: 0;
      padding: 0 1.6rem;
      font-size: ${theme.font.sizes.small};
    }

    @media screen and (min-width: 411px) {
      width: 100%;

      form {
        width: 100%;
      }
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    color: #d7182a;
    font-size: ${theme.font.sizes.xsmall};
    margin-left: 1.5rem;
  `}
`
