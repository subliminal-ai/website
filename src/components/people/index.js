import React from "react"
import { Row, Col } from 'antd';
import { useStaticQuery, graphql, Image } from "gatsby"
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

const People = ({ people }) => {
  const data = useStaticQuery(graphql`
    query {
      kabir: file(absolutePath: { regex: "/services-1.png/" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
    <Row>
      <Col xs={12}>
      {/* <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.name}
            actions={[
              <IconText type="star-o" text="156" key="list-vertical-star-o" />,
              <IconText type="like-o" text="156" key="list-vertical-like-o" />,
              <IconText type="message" text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.name}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      /> */}
      </Col>
    </Row>
  )
}

export default People
