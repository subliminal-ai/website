import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Section,
  WrapperHeader,
  Title,
  Subtitle,
  Play,
  WrapperCard,
  Card,
  ImageCard,
  TitleCard,
  DescriptionCard,
  ActionCard,
  PlayIcon,
} from "./styles"

import arrow from "../../assets/images/right-arrow-white.png"

import text from "../../data/text.json"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      card_1: file(absolutePath: { regex: "/services-1.png/" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card_2: file(absolutePath: { regex: "/services-2.png/" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card_3: file(absolutePath: { regex: "/services-3.png/" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card_4: file(absolutePath: { regex: "/services-4.png/" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Section>
      <WrapperHeader>
        <Title>{text.services.title}</Title>
        <Subtitle>{text.services.subtitle}</Subtitle>
      </WrapperHeader>
      <WrapperCard>
        <Card bgColor="#3486fe">
          <ImageCard fluid={data.card_1.childImageSharp.fluid} />
          <TitleCard>{text.services.cards.card_1.title}</TitleCard>
          <DescriptionCard>
            {text.services.cards.card_1.description}
          </DescriptionCard>
          <ActionCard href="/#">
            {text.services.cards.card_1.action}{" "}
            <img src={arrow} alt="arrow right" />
          </ActionCard>
        </Card>
        <Card bgColor="#4937be" translate>
          <ImageCard fluid={data.card_2.childImageSharp.fluid} />
          <TitleCard>{text.services.cards.card_2.title}</TitleCard>
          <DescriptionCard>
            {text.services.cards.card_2.description}
          </DescriptionCard>
          <ActionCard href="/#">
            {text.services.cards.card_2.action}{" "}
            <img src={arrow} alt="arrow right" />
          </ActionCard>
        </Card>
        <Card bgColor="#3f7be6">
          <ImageCard fluid={data.card_3.childImageSharp.fluid} />
          <TitleCard>{text.services.cards.card_3.title}</TitleCard>
          <DescriptionCard>
            {text.services.cards.card_3.description}
          </DescriptionCard>
          <ActionCard href="/#">
            {text.services.cards.card_3.action}{" "}
            <img src={arrow} alt="arrow right" />
          </ActionCard>
        </Card>
        <Card bgColor="#01185d" translate>
          <ImageCard fluid={data.card_4.childImageSharp.fluid} />
          <TitleCard>{text.services.cards.card_4.title}</TitleCard>
          <DescriptionCard>
            {text.services.cards.card_4.description}
          </DescriptionCard>
          <ActionCard href="/#">
            {text.services.cards.card_4.action}{" "}
            <img src={arrow} alt="arrow right" />
          </ActionCard>
        </Card>
      </WrapperCard>
    </Section>
  )
}

export default Services
