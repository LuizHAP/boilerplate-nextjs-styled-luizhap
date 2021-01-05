import styled, { css } from 'styled-components'

export const Container = styled.div`
  @media screen and (min-width: 411px) {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    background: #fff;
    background-size: cover;
    background-position: 50% 50%;
  }
`

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media screen and (min-width: 411px) {
    width: 60%;
  }
`

export const Logo = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;

    @media screen and (min-width: 411px) {
      text-align: right;
      padding: ${theme.spacings.xlarge};
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    text-align: center;
    padding: ${theme.spacings.xlarge};
  `}
`

export const ForgotPassword = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.light};
    text-align-last: right;
    padding: ${theme.spacings.xsmall};
    cursor: pointer;
  `}
`

export const OrText = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-align: center;
    font-size: ${theme.font.sizes.small};
    padding-top: 2.5rem;
    color: ${theme.colors.primary};
    &:after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #000;
      margin-right: 0.25em;
    }

    &:before {
      content: '';
      flex: 1;
      border-bottom: 1px solid #000;
      margin-left: 0.25em;
    }
    @media screen and (min-width: 411px) {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export const CreateAccount = styled.h1`
  ${({ theme }) => css`
    margin-top: 2rem;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.light};
    & span {
      font-weight: ${theme.font.black};
    }

    & a {
      color: ${theme.colors.secondary};
    }
  `}
`
