import styled from "styled-components"
import Img from "gatsby-image"
import { FaRegPlayCircle } from "react-icons/fa"

export const Section = styled.section`
  padding: 50px 0;
`

export const WrapperCard = styled.div`
  padding: 0 25px;

  @media (min-width: 700px) {
    width: 100%;
    max-width: 850px;
    margin: 0 auto 100px;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`

export const Card = styled.div`
  background: ${({ bgColor }) => bgColor};
  color: #fff;
  width: 100%;
  max-width: 400px;
  min-width: 260px;
  padding: 10px calc(20px + 4vw) 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;

  @media (min-width: 700px) {
    margin: 0 0 -1px;
  }

  @media (min-width: 850px) {
    transform: ${({ translate }) =>
      translate ? "translateY(70px)" : "translateY(0)"};
  }

  @media (min-width: 1400px) {
    max-width: 660px;
    transform: ${({ translate }) =>
      translate ? "translateY(100px)" : "translateY(0)"};
  }
`

export const ImageCard = styled(Img)`
  text-align: center;
  margin: 0 auto 20px;
  flex: 1;
  width: 100%;
`
export const TitleCard = styled.h5`
  color: #fff;
`
export const DescriptionCard = styled.p``
export const ActionCard = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #fff;
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
