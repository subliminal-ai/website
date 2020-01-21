import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"

export const Section = styled.section`
  background: url(${require("../../assets/images/wave.svg")}) right top / cover
    no-repeat;
  padding: 50px 0;

  @media (min-width: 600px) {
    padding: 75px 0;
  }

  @media (min-width: 900px) {
    padding: 100px 0;
  }
`

export const Wrapper = styled.div`
  padding: 0 25px;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 600px) {
    margin-bottom: 60px;
  }

  @media (min-width: 900px) {
    margin-bottom: 80px;
  }
`

export const Title = styled.h2`
  width: 100%;
  max-width: 610px;
  margin: 0 auto 20px;
`
export const Subtitle = styled.p`
  width: 100%;
  max-width: 734px;
  margin: 0 auto 20px;
`

export const WrapperCarousel = styled.div`
  padding: 0 0 50px;

  @media (min-width: 600px) {
    padding: 0 50px 50px;
  }

  @media (min-width: 900px) {
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 50px 50px;
  }
`

export const Card = styled.div`
  padding: 10px;
`

export const Content = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 0 5px rgba(209, 211, 214, 0.2);
`
export const Controls = styled.div`
  display: none;
  margin-top: 40px;

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  & > button {
    background: transparent;
    border: none;
    outline: none;

    &:first-child {
      transform: rotate(180deg);
    }

    & > img {
      margin-bottom: 0;
      transition: transform 200ms ease;
      cursor: pointer;

      &:hover,
      &:active {
        transform: scaleX(1.1);
      }
    }
  }
`
export const Media = styled.div`
  display: flex;
  margin-bottom: 15px;
`
export const Avatar = styled.img`
  margin-bottom: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 7px;
`
export const User = styled.div``

export const Name = styled.h5`
  text-align: left;
  margin-bottom: 0;

  @media (min-width: 600px) {
    font-size: 18px;
  }
`
export const Office = styled.p`
  margin-bottom: 0;

  @media (min-width: 600px) {
    font-size: 16px;
  }
`
export const DescriptionCard = styled.p`
  @media (min-width: 600px) {
    font-size: 16px;
  }
`
export const Stars = styled.div`
  display: flex;
  align-items: center;
`

export const StarIcon = styled(AiFillStar)`
  color: ${({ selected }) => (selected ? "#ffb12b" : "#bebcc8")};

  &:nth-child(5) {
    margin-right: 7px;
  }
`
