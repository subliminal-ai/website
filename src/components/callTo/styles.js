import styled from "styled-components"

import bgImageLeft from "../../assets/images/background-index-4.svg"
import bgImageRight from "../../assets/images/background-index-5.svg"

export const Section = styled.section`
  padding: 50px 0;
  background: ${({ isContactPage }) =>
    isContactPage
      ? "#fff"
      : `url(${bgImageLeft}) top left / 70px no-repeat,
    url(${bgImageRight}) bottom right / 70px no-repeat,
    linear-gradient(74deg, #005ec9 0%, #003eba 51%, #2a84eb 100%)`};

  @media (min-width: 600px) {
    padding: 75px 0;

    background: ${({ isContactPage }) =>
    isContactPage
      ? "#fff"
      : `url(${bgImageLeft}) top left / 100px no-repeat,
        url(${bgImageRight}) bottom right / 100px no-repeat,
        linear-gradient(74deg, #005ec9 0%, #003eba 51%, #2a84eb 100%)`};
  }

  @media (min-width: 900px) {
    padding: 100px 0;
  }
`

export const Wrapper = styled.div`
  padding: 20px 25px;
  text-align: center;
`

export const Title = styled.h2`
  width: 100%;
  max-width: 610px;
  margin: 0 auto 40px;
  color: ${({ isContactPage }) => (isContactPage ? "#353167" : "#fff")};
`
export const Subtitle = styled.p`
  width: 100%;
  max-width: 734px;
  margin: 0 auto 40px;
  color: ${({ isContactPage }) => (isContactPage ? "#353167" : "#fff")};
`

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LearnAboutLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${({ isContactPage }) => (isContactPage ? "#353167" : "#fff")};
  text-decoration: none;
  margin-left: 20px;

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
