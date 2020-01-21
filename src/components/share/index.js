import React from "react"
import PropTypes from "prop-types"

import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from "react-share"

import {
  Wrapper,
  Row,
  Title,
  Buttons,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "./styles"

const Share = ({ socialConfig, isAside = false }) => (
  <Wrapper>
    {!isAside && (
      <Title>
        Over to you! Do you invest in Instagram ads? <br />
        Drop a comment below to let us know!
      </Title>
    )}
    <Row>
      {!isAside && (
        <p style={{ marginBottom: 0, fontWeight: 700 }}>39 SHARES</p>
      )}
      <Buttons isAside={isAside}>
        <TwitterShareButton
          url={socialConfig.config.url}
          title={socialConfig.config.title}
          via={socialConfig.twitterHandle}
        >
          <TwitterIcon />
          <small>SHARE ON TWITTER</small>
        </TwitterShareButton>
        <FacebookShareButton url={socialConfig.config.url}>
          <FacebookIcon />
          <small>SHARE ON FACEBOOK</small>
        </FacebookShareButton>
        <LinkedinShareButton
          url={socialConfig.config.url}
          title={socialConfig.config.title}
        >
          <LinkedinIcon />
          <small>SHARE ON LINKEDIN</small>
        </LinkedinShareButton>
      </Buttons>
    </Row>
  </Wrapper>
)

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}
Share.defaultProps = {
  tags: [],
}

export default Share
