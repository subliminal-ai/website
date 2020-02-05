import React from "react"
import { Row, Col } from 'antd';
import { useStaticQuery, graphql, Image } from "gatsby"

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

const People = ({ people }) => {
  const data = useStaticQuery(graphql`
    query {
      kabir: file(absolutePath: { regex: "/services-1.png/" }) {
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
      {people.map(p => (
        <React.Fragment>
          <Row>
            <Col xs={12} xm={6}>
              <Card bgColor="#3486fe">
                <ImageCard fluid={data.kabir.childImageSharp.fluid} />
                <TitleCard>{p.author}</TitleCard>
                <DescriptionCard>
                  {p.description}
                </DescriptionCard>
              </Card>    
            </Col>
            <Col xs={12} xm={6}>
              a
            </Col>
          </Row>
        </React.Fragment>
      ))}
    </Section>
  )
}

export default People
