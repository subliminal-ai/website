import styled from "styled-components"
import { Button, Input } from 'antd'

const { TextArea } = Input;


export const Section = styled.section`
  padding: 50px 30px 0;

  background: url(${require("../../assets/images/cta-img2.svg")}) 100% 0% / 25%
      no-repeat,
    linear-gradient(to bottom, #fff6ef 15%, #fff 15%, #fff 100%);

  @media (min-width: 780px) {
    padding: 75px 50px 0;
    transform: translateY(-150px);

    background: url(${require("../../assets/images/cta-img2.svg")}) 90% 0% / 25%
        no-repeat,
      linear-gradient(to bottom, #fff6ef 15%, #fff 15%, #fff 100%);
  }
`

export const Row = styled.div`
  @media (min-width: 780px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1320px;
    margin: auto;
  }
`

export const Col = styled.div`
  &:first-child {
    order: 2;
  }

  &:last-child {
    padding: 50px;
    text-align: center;

    @media (min-width: 780px) {
      text-align: left;
    }
  }

  @media (max-width: 780px) {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`

export const ContentWrapper = styled.div`
  margin-top: 100px;
  padding: 20px;

  @media (max-width: 780px) {
    display: none;
  }
`

export const Title = styled.h3`
  display: inline-block;
  font-size: 1.5em;
`
export const SubTitle = styled.p`
  margin-bottom: 40px;
  font-size: 1em;
`
export const FormTitle = styled.h2`
  margin-bottom: 30px;
  display: inline-block;
`
export const Card = styled.div`
  border-radius: 20px;
  box-shadow: 0 40px 99px 0 rgba(139, 139, 139, 0.16);
  padding: 20px;
  background-color: #fff;

  & label > p {
    margin-bottom: 15px;
  }

  @media (min-width: 900px) {
    padding: 50px;
  }
`

export const StyledInput = styled(Input)`
  border-radius: 10px;
  border: solid 2px #d6d7e2;
  width: 100%;
  padding: 20px;


  &::placeholder {
    color: #66647e;
    line-height: 4;
  }

  @media (min-width: 600px) {
    padding: 10px;
  }
`

export const StyledTextArea = styled(TextArea)`
  border-radius: 10px;
  border: solid 2px #d6d7e2;
  width: 100%;
  padding: 10px 20px;

  &::placeholder {
    color: #66647e;
    line-height: 4;
  }
`

export const SubmitButton = styled(Button)`
  width: 100%;
`
