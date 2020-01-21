import React from "react"

import arrow from "../../assets/images/arrow.svg"
import Button from "../button"
import {
  Header,
  WrapperHeadline,
  Headline,
  Title,
  SubTitle,
  WrapperAction,
  Image,
  Link,
} from "./styles"

const Hero = ({
  children,
  textAlignLeft = false,
  smallImageNone = false,
  title,
  subTitle,
  sourceImage,
  bgColor,
  actionLink,
  titleButton,
}) => {
  return (
    <Header bgColor={bgColor}>
      <WrapperHeadline>
        <Headline textAlignLeft={textAlignLeft}>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Headline>
        <Image smallImageNone={smallImageNone} fluid={sourceImage} />
      </WrapperHeadline>
      {children ? (
        children
      ) : (
        <WrapperAction>
          <Button
            href={actionLink}
            responsive
            bgShadow={bgColor ? bgColor : "#fff"}
          >
            {titleButton}
          </Button>
          <Link href="/#">
            Subliminal AI Extended <img src={arrow} alt="arrow" />
          </Link>
        </WrapperAction>
      )}
    </Header>
  )
}

export default Hero
