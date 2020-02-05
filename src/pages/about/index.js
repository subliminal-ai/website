import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Layout, SEO, Hero, People } from "../../components"

const About = ({ data, image }) => {
  
  return (
    <Layout>
      <SEO title="About" />
      <Hero
        title={data.about.title}
        subTitle={data.about.subTitle}
        sourceImage={image}
        textAlignLeft
        smallImageNone
        actionLink={data.about.callToAction}
        titleButton={data.about.callToText}
      />
      <People people={[data.bio]}/>
    </Layout>
  )
}

export default () => (
  <StaticQuery query={aboutQuery} render={({ site, heroHome }) => <About data={site.siteMetadata.content} image={heroHome.childImageSharp.fluid}/>} />
)

const aboutQuery = graphql`
  query AboutQuery {
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
          about {
            title
            subTitle
            callToText
            callToAction
          },
          bio {
            author
            description
          }
        }
      }
    }
  }
`
