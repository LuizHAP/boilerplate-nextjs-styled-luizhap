import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .rightContainer {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    background: #fff;
    background-size: cover;
    background-position: 50% 50%;
  }
`
