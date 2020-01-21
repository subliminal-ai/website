import styled from "styled-components"

import bgImageLeft from "../../assets/images/cta-img1.svg"
import bgImageLeftB from "../../assets/images/cta-img5.svg"
import bgImageRight from "../../assets/images/cta-img4.svg"
import bgImageRightT from "../../assets/images/products-cta-img2.svg"

export const Section = styled.section`
  padding: 50px 0;
  background: url(${bgImageLeft}) top left / 70px no-repeat,
    url(${bgImageLeftB}) bottom left / 70px no-repeat,
    url(${bgImageRight}) 100% 70% / 70px no-repeat,
    url(${bgImageRightT}) 95% 0% / 100px no-repeat,
    linear-gradient(74deg, #005ec9 0%, #003eba 51%, #2a84eb 100%);

  @media (min-width: 600px) {
    padding: 75px 0;

    background: url(${bgImageLeft}) top left / 100px no-repeat,
      url(${bgImageLeftB}) bottom left / 150px no-repeat,
      url(${bgImageRight}) 100% 70% / 100px no-repeat,
      url(${bgImageRightT}) 95% 0% / 200px no-repeat,
      linear-gradient(74deg, #005ec9 0%, #003eba 51%, #2a84eb 100%);
  }

  @media (min-width: 900px) {
    padding: 100px 0;
  }
`

export const Wrapper = styled.div`
  padding: 20px 25px;
  text-align: left;
`

export const Title = styled.h2`
  width: 100%;
  max-width: 734px;
  margin: 0 auto 40px;
  color: #fff;
`
export const Subtitle = styled.span`
  display: block;
  width: 100%;
  max-width: 734px;
  margin: 0 auto 40px;
  color: #fff;
`

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 734px;
  margin: auto;
`

export const LearnAboutLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #fff;
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

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: solid #fff 1px;
  color: #fff;
  width: 160px;

  &:first-child {
    width: 110px;
  }
  &:last-child {
    width: 150px;
  }

  &::placeholder {
    color: #fff;
    font-weight: 500;
    opacity: 1;
  }
`

export const Agreement = styled.label`
  width: 100%;
  max-width: 734px;
  margin: auto;
  display: block;
  margin-bottom: 25px;

  color: #fff;
  cursor: pointer;

  & > input {
    margin-right: 10px;
  }
`
