import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    .slick-slide {
      text-align: center;
    }
    .slick-slide img {
      margin: 0 auto;
      justify-content: center;
      display: flex;
      align-items: center;
      padding-top: 18%;
    }

    .slick-dots li.slick-active button::before {
      color: ${theme.colors.background};
    }

    .slick-dots li button:before {
      font-size: 10px;
      padding-top: ${theme.spacings.medium};
    }
  `}
`
