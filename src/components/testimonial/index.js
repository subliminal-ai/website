import React, { useRef } from "react"
import TinySlider from "tiny-slider-react"

import text from "../../data/text.json"

import avatar from "../../assets/images/avatar.png"
import arrowLong from "../../assets/images/arrow-long.svg"
import {
  Section,
  Wrapper,
  Title,
  Subtitle,
  WrapperCarousel,
  Card,
  Media,
  Avatar,
  User,
  Name,
  Office,
  DescriptionCard,
  Stars,
  StarIcon,
  Content,
  Controls,
} from "./styles"

const Testimonial = () => {
  const controlsRef = useRef(null)
  const onGoTo = dir => controlsRef.current.slider.goTo(dir)

  const settings = {
    items: 2,
    gutter: 20,
    center: true,
    controls: false,
    fixedWidth: 260,
    nav: false,
    edgePadding: 20,
    wrapAround: false,
    responsive: {
      600: {
        items: 2,
        fixedWidth: 380,
      },
      900: {
        fixedWidth: 488,
        gutter: 10,
      },
      1200: {
        fixedWidth: 588,
        gutter: 10,
      },
    },
  }

  return (
    <Section>
      <Wrapper>
        <Title>Experience the People Search Difference</Title>
        <Subtitle>
          See what people like you are saying about BeenVerified
        </Subtitle>
      </Wrapper>
      <WrapperCarousel>
        <TinySlider settings={settings} ref={controlsRef}>
          {text.testimonial.cards &&
            text.testimonial.cards.map(card => (
              <Card key={card.id}>
                <Content>
                  <Media>
                    <Avatar src={avatar} />
                    <User>
                      <Name>{card.name}</Name>
                      <Office>{card.office}</Office>
                    </User>
                  </Media>
                  <DescriptionCard>{card.description}</DescriptionCard>
                  <Stars>
                    <StarIcon selected />
                    <StarIcon selected />
                    <StarIcon selected />
                    <StarIcon selected />
                    <StarIcon />
                    <span> 4.5 / 5</span>
                  </Stars>
                </Content>
              </Card>
            ))}
        </TinySlider>
        <Controls>
          <button type="button" onClick={() => onGoTo("prev")}>
            <img src={arrowLong} alt='...' />
          </button>
          <button type="button" onClick={() => onGoTo("next")}>
            <img src={arrowLong} alt='...' />
          </button>
        </Controls>
      </WrapperCarousel>
    </Section>
  )
}

export default Testimonial
