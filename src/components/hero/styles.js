import styled, { css } from "styled-components"
import Img from "gatsby-image"
import ButtonStl from "../button"

export const Header = styled.header`
  padding: 50px 25px 70px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};

  @media (max-width: 780px) {
    padding: ${({ contact }) =>
      contact ? "50px 25px 20px" : "50px 25px 70px"};
  }
`

export const WrapperHeadline = styled.div`
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1320px;
    margin: auto;
  }
`

export const Headline = styled.div`
  text-align: ${({ textAlignLeft }) => (textAlignLeft ? "left" : "center")};
  margin-bottom: 30px;

  @media (min-width: 600px) {
    max-width: 300px;
    text-align: left;
  }

  @media (min-width: 700px) {
    max-width: 400px;
  }

  @media (min-width: 900px) {
    max-width: 500px;
    margin-right: 30px;
  }

  @media (min-width: 1200px) {
    max-width: 690px;
  }
`

export const Title = styled.h1`
  font-size: 25px;
  line-height: 42px;

  @media (min-width: 600px) {
    font-size: 36px;
    line-height: 50px;
  }

  @media (min-width: 900px) {
    font-size: 45px;
    line-height: 60px;
  }
  @media (min-width: 1200px) {
    font-size: 60px;
    line-height: 80px;
  }
`

export const SubTitle = styled.p`
  font-size: 13px;
  line-height: 21px;

  @media (min-width: 600px) {
    font-size: 16px;
    line-height: 32px;
  }

  @media (min-width: 900px) {
    font-size: 20px;
    line-height: 25px;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
    line-height: 42px;
  }
`

export const Image = styled(Img).attrs({
  imgStyle: {
    marginBottom: 0,
  },
})`
  z-index: 900;
  margin-bottom: 50px;

  ${({ smallImageNone }) =>
    smallImageNone &&
    css`
      display: none;
    `}

  @media (min-width: 600px) {
    display: block;
    width: 455px;
  }
  @media (min-width: 900px) {
    width: 600px;
  }
`

export const WrapperAction = styled.div`
  display: ${({ buttonsNone }) => (buttonsNone ? "none" : "flex")};
  justify-content: center;
  align-items: center;

  & > ${ButtonStl} {
    z-index: 1000;
  }

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  @media (min-width: 900px) {
    width: 100%;
    max-width: 1320px;
    margin: -29px auto auto;
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
