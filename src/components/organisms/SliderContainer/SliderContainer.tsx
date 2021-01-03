import React from 'react'
import {
  Container,
  Item,
  Title,
  Subtitle,
  Image
} from '@/styles/components/LeftContainer'
import { ImagesSlider } from '@/components/molecules'

import items from './items'

const SliderContainer = (): JSX.Element => {
  return (
    <Container>
      <ImagesSlider>
        {items.items.map((item, key) => (
          <Item key={key}>
            <Image src={item.image} alt={item.title} />
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
          </Item>
        ))}
      </ImagesSlider>
    </Container>
  )
}

export default SliderContainer
