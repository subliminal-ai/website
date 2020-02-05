import React from "react"
import { StaticQuery, graphql } from "gatsby"

import {
  Layout,
  SEO,
  Hero,
  Trusted,
  Services,
  Solution,
  Testimonial,
  CallTo,
  News,
} from "../components"

const Landing = ({ data, image }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={data.title}
        subTitle={data.subTitle}
        sourceImage={image}
        actionLink="/contact"
        titleButton={data.callToText}
      />
      {/* <Trusted light/> */}
      <Services />
      <Solution />
      {/* <Testimonial /> */}
      <News
        title="News & Announcements"
        subtitle="See updates to help you with your work, and subscribe to our monthly
          Subliminal AI newsletter to get the latest announcements sent directly
          to your inbox."
      />
      {/* <CallTo
        title={text.callTo.title.default}
        subtitle={text.callTo.subtitle.default}
        linkTitle="Learn About The Process"
      /> */}
    </Layout>
  )
}

export default () => (
  <StaticQuery query={landingQuery} render={({ site, heroHome }) => <Landing data={site.siteMetadata.content.home} image={heroHome.childImageSharp.fluid}/>} />
)

const landingQuery = graphql`
  query LandingQuery {
    heroHome: file(absolutePath: { regex: "/subliminal-hero.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site { 
      siteMetadata {
        content {
          home {
            title
            subTitle
            callToText
            callToAction
          }
        }
      }
    }
  }
`
