import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

import HamburguerButton from "./hamburguerButton"
import { Wrapper, Logo, Nav, List, Item, Link, Container } from "./styles"

const routes = [
  { to: "/#features", title: "Features" },
  { to: "/#resource", title: "Resource" },
  { to: "/blog", title: "Blog" },
  { to: "/#learn-more", title: "Learn More" },
  { to: "/contact", title: "Contact" },
]

const Topbar = ({ isContactPage, bgColorTopbar }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" })

  const data = useStaticQuery(graphql`
    query Topbar {
      logo: file(absolutePath: { regex: "/logo-subliminal.png/" }) {
        childImageSharp {
          fixed(width: 197) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <Container bgColorTopbar={bgColorTopbar}>
      <Wrapper>
        <Link to="/">
          <Logo fixed={data.logo.childImageSharp.fixed} />
        </Link>

        {isMobile && <HamburguerButton setIsOpen={setIsOpen} isOpen={isOpen} />}

        <Nav isOpen={isOpen}>
          <List>
            {routes.map(({ to, title }) => (
              <Item key={to}>
                <Link to={to} onClick={isMobile ? handleClick : null}>
                  {title}
                </Link>
              </Item>
            ))}
          </List>
        </Nav>
      </Wrapper>
    </Container>
  )
}

export default Topbar
