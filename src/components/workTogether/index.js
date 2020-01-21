import React, { useState } from "react"

import text from "../../data/text.json"

import { Button } from ".."
import {
  Section,
  Wrapper,
  Title,
  Subtitle,
  WrapperButtons,
  Input,
  Agreement,
} from "./styles"

const WorkTogether = () => {
  return (
    <Section>
      <Wrapper as='form'
        name="WorkTogether"
        method="POST"
        data-netlify="true" >
        <input type='hidden' name='form-name' value="WorkTogether" />
        <Title>{text.workTogether.title}</Title>
        <Subtitle>
          Hello, I’m{" "}
          <Input
            placeholder="your Name"
            name="name"
          />{" "}
          and I work for{" "}
          <Input
            placeholder="Company Name"
            name="company"
          />{" "}
          We’d like to dev our applications. you can reach us at my{" "}
          <Input
            placeholder="Email Address"
            name="email"
          />{" "}
          to chat & schedule a call
        </Subtitle>
        <Agreement>
          <input type="checkbox" name="agreement" />
          {text.workTogether.agreement}
        </Agreement>
        <WrapperButtons>
          <Button responsive bgShadow="#003eba" type='submit' as='button'>
            {text.workTogether.button}
          </Button>
        </WrapperButtons>
      </Wrapper>
    </Section>
  )
}

export default WorkTogether
