import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  Section,
  WrapperHeader,
  Title,
  Subtitle,
  Row,
  Wrapper,
  Col,
  NumberCard,
  Card,
  Media,
  Image,
  TitleCard,
  DescriptionCard,
  Line,
  ActionCard,
} from "./styles"

import text from "../../data/text.json"

import arrow from "../../assets/images/right-arrow-blue.png"
import verifed from "../../assets/images/verified.png"
import bgBackground_1 from "../../assets/images/background-index-1.png"
import bgBackground_2 from "../../assets/images/background-index-2.png"
import bgBackground_3 from "../../assets/images/background-index-3.png"

const Solution = () => {
  const data = useStaticQuery(graphql`
    query {
      solution_1: file(absolutePath: { regex: "/solution-1.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      solution_2: file(absolutePath: { regex: "/solution-2.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      solution_3: file(absolutePath: { regex: "/solution-3.png/" }) {
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
        <Title>{text.solution.title}</Title>
        <Subtitle>{text.solution.subtitle}</Subtitle>
      </WrapperHeader>
      <Row>
        <Wrapper reverse>
          <Col>
            <Image fluid={data.solution_1.childImageSharp.fluid} />
          </Col>
          <Col>
            <Card>
              <NumberCard color="#c3c7f4" bgBackground={bgBackground_1}>
                {text.solution.cards.card_1.number}
              </NumberCard>
              <TitleCard>{text.solution.cards.card_1.title}</TitleCard>
              <DescriptionCard>
                {text.solution.cards.card_1.description}
              </DescriptionCard>
              <Line />
              <Media>
                <img src={verifed} alt="..." />
                <p>{text.solution.cards.card_1.output}</p>
              </Media>
            </Card>
          </Col>
        </Wrapper>
      </Row>
      <Row bgColor="#f8f8f8">
        <Wrapper>
          <Col>
            <Image fluid={data.solution_2.childImageSharp.fluid} />
          </Col>
          <Col>
            <Card>
              <NumberCard color="#c1deff" bgBackground={bgBackground_2}>
                {text.solution.cards.card_2.number}
              </NumberCard>
              <TitleCard>{text.solution.cards.card_2.title}</TitleCard>
              <DescriptionCard>
                {text.solution.cards.card_2.description}
              </DescriptionCard>
              <Line />
              <Media>
                <img src={verifed} alt="..." />
                <p>{text.solution.cards.card_1.output}</p>
              </Media>
            </Card>
          </Col>
        </Wrapper>
      </Row>
      <Row>
        <Wrapper reverse>
          <Col>
            <Image fluid={data.solution_3.childImageSharp.fluid} />
          </Col>
          <Col>
            <Card>
              <NumberCard color="#fcdead" bgBackground={bgBackground_3}>
                {text.solution.cards.card_3.number}
              </NumberCard>
              <TitleCard>{text.solution.cards.card_3.title}</TitleCard>
              <DescriptionCard>
                {text.solution.cards.card_3.description}
              </DescriptionCard>
              <Line />
              <Media>
                <img src={verifed} alt="..." />
                <p>{text.solution.cards.card_1.output}</p>
              </Media>
            </Card>
          </Col>
        </Wrapper>
      </Row>
    </Section>
  )
}

export default Solution
