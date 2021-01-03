import React from 'react'
import Slider from 'react-slick'
import { Container } from '@/styles/components/ImagesSlider'

interface SliderProps {
  children?: React.ReactNode
}

const settings = {
  dots: true,
  speed: 500,
  arrows: false,
  infinite: true
}

const ImagesSlider: React.FC<SliderProps> = ({ children }): JSX.Element => {
  return (
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  )
}

export default ImagesSlider
