import React from "react"

import arrow from "../../assets/images/right-arrow-white.png"
import { Section, Wrapper, Title, Subtitle, Send, Input, Form } from "./styles"

import text from "../../data/text.json"

const Newsletter = () => {
  return (
    <Section>
      <Wrapper>
        <Title>{text.newsletter.title}</Title>
        <Subtitle>{text.newsletter.subtitle}</Subtitle>
        <Form
          name="newsletter"
          method="POST"
          data-netlify="true" >
          <input type='hidden' name='form-name' value="newsletter" />
          <Input
            type="email"
            placeholder="Email Address..."
            name="email"
          />
          <Send type='submit'>
            {text.newsletter.action} <img src={arrow} alt="..." />
          </Send>
        </Form>
      </Wrapper>
    </Section>
  )
}

export default Newsletter
