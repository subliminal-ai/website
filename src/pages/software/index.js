import React from "react"
import { StaticQuery, graphql } from "gatsby"

import text from "../../data/text.json"

import { Layout, SEO, Trusted, Hero, CallTo } from "../../components"
import LetsTalk from "../../components/letsTalk"
import '@duckdoc/termynal/termynal.css'


const Software = ({ data, image }) => {
  
  return (
    <Layout>
      <SEO title="Software" />
      <Hero
        title={data.title}
        subTitle={data.subTitle}
        textAlignLeft
        rightContent={
          <div style={{minHeight: '50vh'}} id="termynal" data-termynal data-termynal-container>
            <span data-ty="input">pip install synthesize</span>
            <span data-ty="progress"></span>
            <span data-ty>Successfully installed synthesize</span>
          </div>
        }
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
