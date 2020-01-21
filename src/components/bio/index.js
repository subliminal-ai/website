import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import text from "../../data/text.json"
import { InstagramIcon, Avatar, Row, Title } from "./styles"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Title>{text.bio.title}</Title>
      <Row>
        <Avatar
          fixed={data.avatar.childImageSharp.fixed}
          alt={text.bio.author}
        />
        <div>
          <h3>
            {text.bio.author} <InstagramIcon />
          </h3>
          <p>{text.bio.description}</p>
        </div>
      </Row>
    </>
  )
}

export default Bio
