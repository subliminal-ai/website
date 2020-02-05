import React from "react"

import arrow from "../../assets/images/right-arrow-white.png"

import {
  Wrapper,
  Content,
  HeaderCard,
  TitleCard,
  DescriptionCard,
  Send,
  Input,
  Form,
} from "./styles"

import text from "../../data/text.json"

const CardNewsletter = () => {
  return (
    <Wrapper>
      <Content>
        <HeaderCard src={require("../../assets/images/send.svg")} />

        <TitleCard>{text.newsletter.title}</TitleCard>
        <DescriptionCard>{text.newsletter.description}</DescriptionCard>

        <Form name="MailingList"
          method="POST"
          data-netlify="true" >
          <input type='hidden' name='form-name' value="newsletter" />
          <Input
            type="email"
            placeholder="Email Address..."
            name="email"
          />
          <Send type="submit">
            Send <img src={arrow} alt="..." />
          </Send>
        </Form>
      </Content>
    </Wrapper>
  )
}

export default CardNewsletter
