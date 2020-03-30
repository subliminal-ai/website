import React from "react"
import { Row, Col } from 'antd';
import { useStaticQuery, graphql, Image } from "gatsby"
import Img from "gatsby-image"

import { List, Avatar, Icon } from 'antd';

import {
  Section,
  WrapperHeader,
  Title,
  Subtitle,
  Play,
  WrapperCard,
  ImageCard,
  TitleCard,
  DescriptionCard,
  ActionCard,
  PlayIcon,
} from "./styles"

import arrow from "../../assets/images/right-arrow-white.png"

const People = ({ people, image }) => {
  
  const listData = [
    {
      name: 'Kabir Khan',
      description: 'Kabir Khan is the founder of Subliminal AI.'
    }
  ]

  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  return (
    <React.Fragment>
      <Row>
        <Col xs={24}>
          <h1 style={{textAlign: 'center', fontSize: '2em'}}>
            Our Team
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={12}>
          <div style={{padding: '20px'}}>
            <Img fluid={image} />
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <h3>Kabir Khan</h3>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default People
