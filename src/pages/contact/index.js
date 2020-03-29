import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import text from "../../data/text.json"

import { Layout, SEO, Trusted, Hero, CallTo } from "../../components"
import LetsTalk from "../../components/letsTalk"


const Contact = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      heroContact: file(absolutePath: { regex: "/hero-contact.png/" }) {
        childImageSharp {
          fluid(maxWidth: 455, maxHeight: 552) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout bgColorTopbar="#fff6ef">
      <SEO title="Contact" />
      <Hero
        title={text.hero.title.contact}
        subTitle={text.hero.subtitle.contact}
        sourceImage={data.heroContact.childImageSharp.fluid}
        bgColor="#fff6ef"
        textAlignLeft
        smallImageNone
        actionLink="https://calendly.com/kabirkhan/15min"
        titleButton="Schedule A Call"
      />
      <LetsTalk />
    </Layout>
  )
}

export default Contact
