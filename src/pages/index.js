import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import text from "../data/text.json"

import {
  Layout,
  SEO,
  Hero,
  Trusted,
  OpenSource,
  Solution,
  Testimonial,
  CallTo,
  News,
} from "../components"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      heroHome: file(absolutePath: { regex: "/subliminal-hero.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={text.hero.title.home}
        subTitle={text.hero.subtitle.home}
        sourceImage={data.heroHome.childImageSharp.fluid}
        actionLink="/contact"
        titleButton="Contact"
      />
      <Trusted />
      <OpenSource />
      <Solution />
      <Testimonial />
      <News
        title="News & Announcements"
        subtitle="See updates to help you with your work, and subscribe to our monthly
          Subliminal AI newsletter to get the latest announcements sent directly
          to your inbox."
      />
      <CallTo
        title={text.callTo.title.default}
        subtitle={text.callTo.subtitle.default}
        linkTitle="Learn About The Process"
      />
    </Layout>
  )
}

export default Index
