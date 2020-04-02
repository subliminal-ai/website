import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { FaSearch } from "react-icons/fa"
import Enter from "../../assets/images/enter.svg"

import {
  Layout,
  CallTo,
  Trusted,
  Card,
  Hero,
  Newsletter,
  Button,
  CardNewsletter,
  CardVideo,
} from "../../components"

import text from "../../data/text.json"

import { Wrapper as WrapperCard } from "../../components/card/styles"
import { Wrapper as WrapperCardNewsletter } from "../../components/cardNewsletter/styles"
import { Wrapper as WrapperCardVideo } from "../../components/cardVideo/styles"

import arrow from "../../assets/images/arrow.svg"

const WrapperGrid = styled.div`
  background-color: #f6f7fb;
  padding: 75px 10px 25px;

  @media (min-width: 600px) {
    padding: 100px 10px 25px;
  }

  @media (min-width: 900px) {
    padding: 150px 10px 25px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    grid-gap: 20px;
    margin: 0 auto;

    & > ${WrapperCard}:nth-child(9) {
      grid-column: 1 / -1;
    }
    & > ${WrapperCard}:nth-child(17) {
      grid-column: 1 / -1;
    }
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(6, minmax(100px, 209px));
    grid-gap: 25px;
    width: 100%;
    max-width: 1320px;

    & > ${WrapperCard}:nth-child(1) {
      grid-column: 1 / 5;
    }

    & > ${WrapperCardNewsletter}:nth-child(2) {
      grid-column: span 2;
    }

    & > ${WrapperCard}:nth-child(3) {
      grid-column: span 3;
    }
    & > ${WrapperCard}:nth-child(4) {
      grid-column: span 3;
    }
    & > ${WrapperCard}:nth-child(5) {
      grid-column: span 4;
    }
    & > ${WrapperCard}:nth-child(6) {
      grid-column: span 2;
    }
    & > ${WrapperCardVideo}:nth-child(7) {
      grid-column: span 2;
    }
    & > ${WrapperCard}:nth-child(8) {
      grid-column: span 2;
    }
    & > ${WrapperCard}:nth-child(9) {
      grid-column: span 2;
    }
    & > ${WrapperCard}:nth-child(10) {
      grid-column: 1 / -1;
    }
    & > ${WrapperCard}:nth-child(11) {
      grid-column: span 3;
    }
    & > ${WrapperCard}:nth-child(12) {
      grid-column: span 3;
    }
    & > ${WrapperCard}:nth-child(13) {
      grid-column: span 3;
    }
    & > ${WrapperCard}:nth-child(14) {
      grid-column: span 3;
    }

    & > ${WrapperCard}:nth-child(15) {
      grid-column: span 2;
    }
    & > ${WrapperCard}:nth-child(16) {
      grid-column: span 2;
    }
    & > ${WrapperCard}:nth-child(17) {
      grid-column: span 2;
    }
  }
`

export const WrapperAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0;

  & > ${Button} {
    z-index: 1000;
  }
  & > * {
    margin: 0 20px;
  }
`

export const Link = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: #1f256d;

  z-index: 1000;

  & > img {
    transition: ease-in-out 300ms;
    margin: 0 0 0 10px;
  }

  &:hover {
    color: #353167;

    & > img {
      margin: 0 0 0 15px;
    }
  }
`
const WrapperCustomer = styled.div`
  padding: 50px 10px;
`

const HeaderCustomer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + p {
    max-width: 800px;
  }
`

const WrapperSearch = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: auto;
`
const Search = styled.div`
  margin-bottom: 40px;
  background-color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 700px;

  & > input {
    border: none;
    padding-left: 10px;
    font-size: 15px;
    flex: 1;

    @media (min-width: 600px) {
      font-size: 20px;
    }
  }

  & > img {
    text-align: right;
    margin: 0;
  }
`

const Filter = styled.p`
  font-weight: 500;
  margin-bottom: 0;
`

const Categories = styled.nav`
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding: 15px 0;
  align-items: center;
`
const LinkCategories = styled.a`
  color: #1f256d;
  font-weight: 500;
  text-decoration: none;
  margin-right: 15px;
  display: inline-block;
  white-space: nowrap;
`

const Square = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  background-color: #e5e7ed;
  margin-left: 10px;
  margin-bottom: 3px;
`

const categories = [
  "Community",
  "Culture",
  "Design",
  "Developer",
  "Engineering",
  "Marketplace",
  "News",
  "Product Updates",
]

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      heroBlog: file(absolutePath: { regex: "/hero-blog.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              category
              author
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
      }
    }
  `)

  return (
    <Layout bgColorTopbar="#9ce3ff">
      <Hero
        title={text.hero.title.blog}
        subTitle={text.hero.subtitle.blog}
        sourceImage={data.heroBlog.childImageSharp.fluid}
        bgColor="#9ce3ff"
        smallImageNone
        buttonsNone
      >
        {/* <WrapperSearch>
          <Search>
            <FaSearch />
            <input type="text" placeholder="Search Here…" />
            <img src={Enter} alt="..." />
          </Search>
          <Filter>Filter By Category</Filter>
          <Categories>
            {categories.map((category, index, array) => (
              <LinkCategories key={category} href="#">
                {category} {index < array.length - 1 && <Square />}{" "}
              </LinkCategories>
            ))}
          </Categories>
        </WrapperSearch> */}
      </Hero>
      <WrapperGrid>
        <Grid>
          {data &&
            data.allMarkdownRemark.edges.map(({ node }, index) => {
              if (index === 1) {
                return (
                  <CardNewsletter
                    key={String(
                      node.frontmatter.date +
                      Math.random()
                        .toString(36)
                        .substring(7)
                    )}
                  />
                )
              }

              if (index === 6) {
                return (
                  <CardVideo
                    key={String(
                      node.frontmatter.date +
                      Math.random()
                        .toString(36)
                        .substring(7)
                    )}
                  />
                )
              }

              if (index === 9) {
                return (
                  <WrapperCustomer
                    style={{ gridColumn: "1 / -1" }}
                    key={String(
                      node.frontmatter.date +
                      Math.random()
                        .toString(36)
                        .substring(7)
                    )}
                  >
                    <HeaderCustomer>
                      <h2>Customer Stories</h2>
                      <Link href="/">
                        View all <img src={arrow} alt="arrow" />
                      </Link>
                    </HeaderCustomer>
                    <p>
                      Abstract Customers Share How They Manage Design Systems,
                      Scale Design Operations, And Collaborate
                      Cross-functionally.
                    </p>
                  </WrapperCustomer>
                )
              }

              if (index >= 17) {
                return null
              }

              return (
                <Card
                  post={node.frontmatter}
                  slug={node.fields.slug}
                  key={String(
                    node.frontmatter.date +
                    Math.random()
                      .toString(36)
                      .substring(7)
                  )}
                />
              )
            })}
        </Grid>
      </WrapperGrid>
      <CallTo
        title={text.callTo.title.default}
        subtitle={text.callTo.subtitle.default}
        linkTitle="Learn About The Process"
      />
    </Layout>
  )
}

export default Blog
