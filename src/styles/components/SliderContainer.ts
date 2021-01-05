import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    @media screen and (max-width: 400px) {
      display: none;
    }
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    background: ${theme.colors.secondary};
    background-size: cover;
    background-position: 50% 50%;
  `}
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 60%;
  }
`

export const Image = styled.img`
  width: 60%;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: ${theme.font.sizes.large};
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.small};
  `}
`
