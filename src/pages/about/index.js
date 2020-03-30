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
          <Col xs={{span: 24}} sm={{span: 18, offset: 2}} md={{span: 12, offset: 6}}>
            <h1 style={{textAlign: 'center', fontSize: '3em'}}>
              What we believe
            </h1>
            <p style={{textAlign: 'center', fontSize: '1.7em'}}>
              At Subliminal AI, we have a set of core beliefs that drive every one of our projects.
            </p>
          </Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Col xs={{span: 24}} sm={{span: 18, offset: 2}} md={{span:12, offset: 6}}>
            <h2 style={{fontSize: '2em', color: '#444'}}>
              <strong>1. Augmentation {'>'} Automation</strong>
            </h2>
            <p style={{fontSize: '1.7em', marginLeft: '1em'}}>
              At Subliminal AI we believe in <strong>Augementation</strong> over <strong>Automation.</strong>&nbsp;
              We are <strong>not</strong> in the business of replacing your workforce with fancy AI models. We <strong>are</strong> in the business of augmenting your company's main workflows to help make each one of your employees more efficient and effective at their job.
            </p>
          </Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Col xs={{span: 24}} sm={{span: 18, offset: 2}} md={{span:12, offset: 6}}>
            <h2 style={{fontSize: '2em', color: '#444'}}>
              <strong>2. Artificial Intelligence is not Magic</strong>
            </h2>
            <p style={{fontSize: '1.7em', marginLeft: '1em'}}>
              AI is a relatively new field. It has incredible potential but it's only useful if it's easy to understand. We strive to build explainable, actionable and reliable AI products, not moonshots.
            </p>
          </Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Col xs={{span: 24}} sm={{span: 18, offset: 2}} md={{span:12, offset: 6}}>
            <h2 style={{fontSize: '2em', color: '#444'}}>
              <strong>3. Quality > Speed</strong>
            </h2>
            <p style={{fontSize: '1.7em', marginLeft: '1em'}}>
              Our priority is always to build <strong>high-quality</strong> AI solutions, not to get your project done in 2 weeks.
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
