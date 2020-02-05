import React from "react"
import { StaticQuery, graphql } from "gatsby"

import text from "../../data/text.json"

import { Layout, SEO, Trusted, Hero, CallTo } from "../../components"
import LetsTalk from "../../components/letsTalk"


const Software = ({ data, image }) => {
  
  return (
    <Layout>
      <SEO title="Software" />
      <Hero
        title={data.title}
        subTitle={data.subTitle}
        sourceImage={image}
        textAlignLeft
        smallImageNone
        actionLink={data.callToAction}
        titleButton={data.callToText}
      />
    </Layout>
  )
}

export default () => (
  <StaticQuery query={softwareQuery} render={({ site, heroHome }) => <Software data={site.siteMetadata.content.software} image={heroHome.childImageSharp.fluid}/>} />
)

const softwareQuery = graphql`
  query SoftwareQuery {
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
          software {
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
