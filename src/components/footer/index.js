import React from "react"

import arrow from "../../assets/images/arrow.svg"
import logo from "../../assets/images/logo-subliminal.png"
import {
  ContainerFooter,
  Wrapper,
  WrapperNavFooter,
  NavFooter,
  Title,
  LinkTo,
  InTouch,
  TitleForm,
  DescriptionForm,
  Form,
  EmailInput,
  Send,
  FooterNote,
  Logo,
  Language,
  Copy,
  IconGlobe,
} from "./styles"

import text from '../../data/text.json'

const services = [
  { to: "#", title: "NLP (Text Analysis)" },
  { to: "#", title: "Computer Vision" },
  { to: "#", title: "Data Analysis" },
  { to: "#", title: "Software Development" },
]
const companies = [
  { to: "#", title: "Our story" },
  { to: "#", title: "Press" },
  { to: "#", title: "Blog" },
  { to: "#", title: "Careers" },
]



const Footer = () => (
  <ContainerFooter>
    <Wrapper>
      <WrapperNavFooter>
        <NavFooter>
          <Title>SERVICES</Title>
          {services.map(service => (
            <LinkTo key={service.title} to={service.to}>
              {service.title}
            </LinkTo>
          ))}
        </NavFooter>
        <NavFooter>
          <Title>COMPANY</Title>
          {companies.map(company => (
            <LinkTo key={company.title} to={company.to}>
              {company.title}
            </LinkTo>
          ))}
        </NavFooter>
      </WrapperNavFooter>
      <InTouch>
        <TitleForm>{text.footer.inTouch.title}</TitleForm>
        <DescriptionForm>{text.footer.inTouch.description}</DescriptionForm>
        <Form
          name="MailingList"
          method="POST"
          data-netlify="true" >
          <input type='hidden' name='form-name' value="MailingList" />
          <EmailInput type="email" name='email' placeholder="Email Address…" />
          <Send type="submit">
            Send <img src={arrow} alt='...' />
          </Send>
        </Form>
      </InTouch>
    </Wrapper>

    <FooterNote>
      <Logo src={logo} />
      <Language>
        English <IconGlobe /> &nbsp;&nbsp;&nbsp;&nbsp; United State{" "}
        <img src={require("../../assets/images/usa.svg")} alt='...' />
      </Language>
      <Copy>© 2020 Subliminal AI. All rights reserved</Copy>
    </FooterNote>
  </ContainerFooter>
)

export default Footer
