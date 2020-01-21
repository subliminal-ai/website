import React from "react"

import { Section, Row, Col, Title, Link } from "./styles"
import dontLikeForms from "../../assets/images/dontlinkforms.png"

const DontLikeForm = () => {
  return (
    <Section>
      <Row>
        <Col>
          <Title>
            Don’t like forms? <br></br>
            Talk to us directly or by email.
          </Title>
          <div>
            <Link href="tel:+969321767">969 321 767</Link>
            <Link href="mailto:info@nobox.pt">info@nobox.pt</Link>
          </div>
        </Col>
        <Col>
          <img src={dontLikeForms} alt="don't like forms" />
        </Col>
      </Row>
    </Section>
  )
}

export default DontLikeForm
