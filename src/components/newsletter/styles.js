import styled from "styled-components"

import bgImageLeft from "../../assets/images/cta-img1.svg"
import bgImageLeftB from "../../assets/images/cta-img5-w.svg"
import bgImageRight from "../../assets/images/cta-img4.svg"
import bgImageRightT from "../../assets/images/products-cta-img2.svg"

export const Section = styled.section`
  padding: 50px 0;
  background: url(${bgImageLeft}) top left / 70px no-repeat,
    url(${bgImageLeftB}) bottom left / 70px no-repeat,
    url(${bgImageRight}) 80% 100% / 70px no-repeat,
    url(${bgImageLeftB}) 80% 0% / 70px no-repeat,
    url(${bgImageRightT}) 100% 60% / 100px no-repeat, #2a84eb;

  @media (min-width: 600px) {
    padding: 75px 0;

    background: url(${bgImageLeft}) top left / 100px no-repeat,
      url(${bgImageLeftB}) bottom left / 150px no-repeat,
      url(${bgImageLeftB}) 90% 0% / 200px no-repeat,
      url(${bgImageRight}) 80% 100% / 100px no-repeat,
      url(${bgImageRightT}) 100% 70% / 200px no-repeat, #2a84eb;
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
  max-width: 700px;
  margin: 0 auto 40px;
  color: #fff;
`
export const Subtitle = styled.span`
  display: block;
  width: 100%;
  max-width: 700px;
  margin: 0 auto 40px;
  color: #fff;
`

export const Send = styled.button`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #fff;
  background-color: transparent;
  border: none;
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
  flex: 1;
  background-color: transparent;
  border: none;
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

export const Form = styled.form`
  max-width: 700px;
  margin: auto;
  display: flex;
  padding-bottom: 15px;
  border-bottom: solid #fff 1px;
  color: #fff;
  cursor: pointer;

  & > input {
    margin-right: 10px;
  }
`
