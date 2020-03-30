import styled from "styled-components"
import Img from "gatsby-image"

export const Section = styled.section`
  padding: 50px 0;

  @media (min-width: 600px) {
    padding: 75px 0;
  }

  @media (min-width: 900px) {
    padding: 100px 0;
  }
`

export const WrapperHeader = styled.div`
  padding: 0 25px;
  text-align: center;
  margin-bottom: 50px;
`

export const Title = styled.h2`
  width: 100%;
  max-width: 410px;
  margin: 0 auto 40px;
  font-size: 2.5em;
`
export const Subtitle = styled.p`
  width: 100%;
  max-width: 734px;
  margin: 0 auto 40px;
  font-size: 1.5em;
`

export const Row = styled.div`
  padding: 50px 0;
  ${({ bgColor }) => bgColor && `background: ${bgColor}`}
`
export const Col = styled.div`
  @media (min-width: 600px) {
    padding: 10px;
    width: 100%;
    max-width: 50%;
  }

  @media (min-width: 700px) {
    padding: 30px;
  }
`

export const Wrapper = styled.div`
  padding: 0 25px;

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
  }
`

export const Card = styled.div`
  margin-top: 20px;
`
export const Media = styled.div`
  display: flex;
  align-items: flex-start;

  & > img {
    margin-right: 7px;
  }
`

export const NumberCard = styled.span`
  font-size: 29px;
  color: ${({ color }) => color};
  background: ${({ bgBackground }) => `url(${bgBackground})`} left / contain
    no-repeat;
  display: block;
  padding: 0 10px;
  margin-bottom: 20px;
  font-weight: 300;

  @media (min-width: 600px) {
    font-size: 50px;
    padding: 0 18px;
  }
  @media (min-width: 900px) {
    font-size: 88px;
    padding: 0 35px;
  }
`
export const Line = styled.hr`
  height: 1px;
  color: #e2e2e2;
`

export const Image = styled(Img)`
  flex: 1;
  width: 100%;
  min-width: 260px;
`
export const TitleCard = styled.h5`
  font-size: 1.5em;
`
export const DescriptionCard = styled.p`
  margin-bottom: 30px;
  font-size: 1.2em;
`

export const ActionCard = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #2a84eb;
  text-decoration: none;

  & > img {
    margin-bottom: 0;
    margin-left: 10px;
    transition: ease-in-out 300ms;
  }

  &:hover {
    & > img {
      margin: 0 0 0 15px;
    }
  }
`
