import React from "react"
import { graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { FaRegBookmark, FaHeart } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"

import text from "../../data/text.json"
import {
  Bio,
  Share,
  Layout,
  SEO,
  CallTo,
  News,
  Trusted,
} from "../../components"

import {
  Hero,
  Title,
  Category,
  ContentPost,
  Footer,
  Line,
  WrapperInfo,
  Info,
  InfoTitle,
  Media,
  Avatar,
  Name,
  SideShare,
} from "./styles"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteUrl = data.site.siteMetadata.siteUrl
  const siteTitle = data.site.siteMetadata.title
  const userTwitter = data.site.siteMetadata.social.twitter
  const heroSource = post.frontmatter.hero.childImageSharp.fluid.src
  const published = post.frontmatter.date
  const author = post.frontmatter.author
  const category = post.frontmatter.category
  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" })

  const disqusConfig = {
    url: `${siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.title,
  }

  const socialConfig = {
    twitterHandle: `${userTwitter}`,
    config: {
      url: `${siteUrl + location.pathname}`,
      title: `${post.title}`,
    },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <Hero bgHero={heroSource}>
          <Category>{category}</Category>
          <Title>{post.frontmatter.title}</Title>

          <WrapperInfo>
            <SideShare>
              <FaHeart />
              <FaRegBookmark />
              {isDesktop && <Share isAside socialConfig={socialConfig} />}
            </SideShare>
            <Info>
              <InfoTitle>Author</InfoTitle>
              <Media>
                <Avatar src={require("../../assets/images/avatar.png")} />
                <Name>By {author}</Name>
              </Media>
            </Info>
            <Info>
              <InfoTitle>Published</InfoTitle>
              <Media>
                <Avatar
                  icon
                  src={require("../../assets/images/published.svg")}
                />
                <Name>{published}</Name>
              </Media>
            </Info>
            <Info>
              <InfoTitle>Comments</InfoTitle>
              <Media>
                <Avatar
                  icon
                  src={require("../../assets/images/comments.svg")}
                />
                <Name>
                  <CommentCount config={disqusConfig} placeholder={"..."} />
                </Name>
              </Media>
            </Info>
          </WrapperInfo>
        </Hero>
        <ContentPost dangerouslySetInnerHTML={{ __html: post.html }} />
        <Footer>
          <Share socialConfig={socialConfig} />
          <Line />
          <Bio />
          <Line />
          <Disqus config={disqusConfig} />
        </Footer>
      </article>
      <News title="Read Similar Post" />
      <Trusted light />
      <CallTo
        title={text.callTo.title.default}
        subtitle={text.callTo.subtitle.default}
        linkTitle="Learn About The Process"
      />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          twitter
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        category
        description
        hero {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
