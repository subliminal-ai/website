import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Layout, SEO, Hero, People } from "../../components"
import { Row, Col } from 'antd';


const About = ({ data, image, kabir_image }) => {
  console.log(image, kabir_image)
  
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
      <div style={{width: '100%', marginTop: 30}}>
        <Row>
          <Col xs={{span: 20, offset: 2}} sm={{span: 18, offset: 2}} md={{span: 12, offset: 6}}>
            <h2 style={{textAlign: 'center'}}>
              What we believe
            </h2>
            <p>
              At Subliminal AI, we have a set of core beliefs that drive every one of our projects.
            </p>
          </Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Col xs={{span: 20, offset: 2}} sm={{span: 18, offset: 2}} md={{span:12, offset: 6}}>
            <h3>
              1. Augmentation {'>'} Automation
            </h3>
            <p style={{marginLeft: '1em'}}>
              At Subliminal AI we believe in <strong>Augementation</strong> over <strong>Automation.</strong>&nbsp;
              We are not in the business of replacing your workforce with fancy AI models. We are in the business of augmenting your company's main workflows to help make each employee more effective at their job.&nbsp;
              We automate what’s easy so your team can focus on what’s hard.
            </p>
          </Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Col xs={{span: 20, offset: 2}} sm={{span: 18, offset: 2}} md={{span:12, offset: 6}}>
            <h3>
              2. Quality > Speed
            </h3>
            <p style={{marginLeft: '1em'}}>
              Our priority is always to build <strong>high-quality</strong> AI solutions, not to get your project done in 2 weeks.
            </p>
          </Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Col xs={{span: 20, offset: 2}} sm={{span: 18, offset: 2}} md={{span:12, offset: 6}}>
            <h3>
              3. Artificial Intelligence &ne; Magic
            </h3>
            <p style={{marginLeft: '1em'}}>
              AI is a relatively new field, and is only as incredible as it is useful and easy to understand. We strive to build explainable, actionable and reliable AI products, not moonshots.
            </p>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default () => (
  <StaticQuery query={aboutQuery} render={({ site, heroHome, kabir }) => <About data={site.siteMetadata.content} image={heroHome.childImageSharp.fluid} kabir_image={kabir.childImageSharp.fluid}/>} />
)

const aboutQuery = graphql`
  query AboutQuery {
    heroHome: file(absolutePath: { regex: "/logo_full.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    kabir: file(absolutePath: { regex: "/profile_pic.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
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
