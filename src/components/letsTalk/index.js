import React from "react"

import { Section, Row, Col, Title, SubTitle, Card, FormTitle } from "./styles"

const LetsTalk = () => (
  <Section>
    <Row>
      <Col>
        <Card>
          <form
            name="LetsTalk"
            method="POST"
            netlify
          >
            <input type='hidden' name='form-name' value="LetsTalk" />
            <FormTitle>Let’s talk!</FormTitle>
            <label>
              <p>Full Name</p>
              <input type="text" name="name" placeholder="Enter Your Name" />
            </label>

            <label>
              <p>Email Address</p>
              <input type="email" name="email" placeholder="Enter Your Email" />
            </label>

            <label>
              <p> Tell me your Though</p>
              <textarea
                name="message"
                placeholder="Enter Your message"
                rows="6"
              />
            </label>
            <button type="submit">MAKE A SCHEDULE</button>
          </form>
        </Card>
      </Col>
      <Col>
        <Title>Understand AI</Title>
        <SubTitle>
          Learn which areas of your business can be improved with AI
        </SubTitle>

        <Title>Get a Project Estimation</Title>
        <SubTitle>
          Estimate the time and budget needed to develop a solution
        </SubTitle>

        <Title>Get to know</Title>
        <SubTitle>
          Learn more about our team’s expertise and capabilities
        </SubTitle>
      </Col>
    </Row>
  </Section>
)

export default LetsTalk
