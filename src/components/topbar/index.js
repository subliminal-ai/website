import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

import HamburgerButton from "./hamburguerButton"
import { Wrapper, Logo, Nav, List, Item, Link, Container, ExternalLink } from "./styles"
import Button from '../button'

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
      site {
        siteMetadata {
          navigation {
            text
            url 
          }
          content {
            contactButtonText
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

        {isMobile && <HamburgerButton setIsOpen={setIsOpen} isOpen={isOpen} />}

        <Nav isOpen={isOpen}>
          <List>
            {data.site.siteMetadata.navigation.map(({ text, url }) => (
              <Item key={url}>
                {url.startsWith("https") ? (
                  <ExternalLink href={url} target="_blank">{text}</ExternalLink>
                ) : (
                  <Link to={url} onClick={isMobile ? handleClick : null}>
                    {text}
                  </Link>
                )}
              </Item>
            ))}
            <Item>
              <Button href="/contact" bgShadow={bgColorTopbar}>{data.site.siteMetadata.content.contactButtonText}</Button>
            </Item>
          </List>
        </Nav>
      </Wrapper>
    </Container>
  )
}

export default Topbar
