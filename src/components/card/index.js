import React from "react"

import avatar from "../../assets/images/avatar.png"

import {
  Wrapper,
  Content,
  HeaderCard,
  Info,
  TitleCard,
  Tag,
  Time,
  DescriptionCard,
  Media,
  Avatar,
  Name,
} from "./styles"

const Card = ({ post, slug }) => {
  const { title, date, description, category, hero, author } = post

  return (
    <Wrapper>
      <Content href={slug}>
        <HeaderCard src={hero.childImageSharp.fluid.src} />
        <Info>
          <Tag>{category} </Tag> <Time> {date}</Time>
        </Info>
        <TitleCard>{title}</TitleCard>
        <DescriptionCard>{description}</DescriptionCard>
        <Media>
          <Avatar src={avatar} />
          <Name>By {author}</Name>
        </Media>
      </Content>
    </Wrapper>
  )
}

export default Card
