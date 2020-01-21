import React, { useRef } from "react"
import TinySlider from "tiny-slider-react"
import { useStaticQuery, graphql } from "gatsby"

import Card from "../card"

import arrowLong from "../../assets/images/arrow-long.svg"
import arrow from "../../assets/images/right-arrow-blue.png"
import {
  Section,
  Wrapper,
  Title,
  Subtitle,
  WrapperCarousel,
  LinkTo,
  Controls,
} from "./styles"

const settings = {
  items: 1,
  controls: false,
  nav: false,
  wrapAround: false,
  responsive: {
    600: {
      items: 2,
    },
  },
}

const News = ({ title, subtitle }) => {
  const controlsRef = useRef(null)
  const onGoTo = dir => controlsRef.current.slider.goTo(dir)

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              category
              author
              hero {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section>
      <Wrapper>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <LinkTo to="/blog">
          Explore Blog <img src={arrow} alt="..." />
        </LinkTo>
      </Wrapper>
      <WrapperCarousel>
        <TinySlider settings={settings} ref={controlsRef}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Card
              post={node.frontmatter}
              slug={node.fields.slug}
              key={String(
                node.frontmatter.date +
                Math.random()
                  .toString(36)
                  .substring(7)
              )}
            />
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

export default News
