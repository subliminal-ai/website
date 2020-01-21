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

const OpenSource = () => {
  const data = useStaticQuery(graphql`
    query {
      card_1: file(absolutePath: { regex: "/open-source-1.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card_2: file(absolutePath: { regex: "/open-source-2.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card_3: file(absolutePath: { regex: "/open-source-3.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      card_4: file(absolutePath: { regex: "/open-source-4.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Section>
      <WrapperHeader>
        <Title>{text.openSource.title}</Title>
        <Subtitle>{text.openSource.subtitle}</Subtitle>
        <Play href="/#">
          <PlayIcon /> {text.openSource.playMove}
        </Play>
      </WrapperHeader>
      <WrapperCard>
        <Card bgColor="#3486fe">
          <ImageCard fluid={data.card_1.childImageSharp.fluid} />
          <TitleCard>{text.openSource.cards.card_1.title}</TitleCard>
          <DescriptionCard>
            {text.openSource.cards.card_1.subtitle}
          </DescriptionCard>
          <ActionCard href="/#">
            {text.openSource.cards.card_1.action}{" "}
            <img src={arrow} alt="arrow right" />
          </ActionCard>
        </Card>
        <Card bgColor="#4937be" translate>
          <ImageCard fluid={data.card_2.childImageSharp.fluid} />
          <TitleCard>{text.openSource.cards.card_2.title}</TitleCard>
          <DescriptionCard>
            {text.openSource.cards.card_2.subtitle}
          </DescriptionCard>
          <ActionCard href="/#">
            {text.openSource.cards.card_2.action}{" "}
            <img src={arrow} alt="arrow right" />
          </ActionCard>
        </Card>
        <Card bgColor="#3f7be6">
          <ImageCard fluid={data.card_3.childImageSharp.fluid} />
          <TitleCard>{text.openSource.cards.card_3.title}</TitleCard>
          <DescriptionCard>
            {text.openSource.cards.card_3.subtitle}
          </DescriptionCard>
          <ActionCard href="/#">
            {text.openSource.cards.card_3.action}{" "}
            <img src={arrow} alt="arrow right" />
          </ActionCard>
        </Card>
        <Card bgColor="#01185d" translate>
          <ImageCard fluid={data.card_4.childImageSharp.fluid} />
          <TitleCard>{text.openSource.cards.card_4.title}</TitleCard>
          <DescriptionCard>
            {text.openSource.cards.card_4.subtitle}
          </DescriptionCard>
          <ActionCard href="/#">
            {text.openSource.cards.card_4.action}{" "}
            <img src={arrow} alt="arrow right" />
          </ActionCard>
        </Card>
      </WrapperCard>
    </Section>
  )
}

export default OpenSource
