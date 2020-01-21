import styled from "styled-components"
import { Link } from "gatsby"

import { Wrapper as WrapperCard } from "../card/styles"

export const Section = styled.section`
  padding: 50px 0;
  background: #f9fbff;

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
export const LinkTo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #2a84eb;
  text-decoration: none;

  & > img {
    margin-bottom: 0;
    margin-left: 10px;
    transition: ease-in-out 300ms;
    width: 20px;

    @media (min-width: 600px) {
      width: 30px;
    }

    @media (min-width: 900px) {
      width: 39px;
    }
  }

  &:hover {
    & > img {
      margin: 0 0 0 15px;
    }
  }
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

  & ${WrapperCard} {
    padding: 20px;
    height: 100%;

    & > div {
      align-items: stretch;
    }
  }
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
