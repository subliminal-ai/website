import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "antd"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Subliminal AI - 404: Not Found" />
      <Row>
        <Col xs={{span: 20, offset: 2}} sm={{span: 18, offset: 2}} md={{span: 12, offset: 6}}> 
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Col>
      </Row>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
