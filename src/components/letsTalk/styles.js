import styled from "styled-components"

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

export const Title = styled.h3`
  margin-bottom: 30px;
  display: inline-block;
`
export const FormTitle = styled.h2`
  margin-bottom: 30px;
  display: inline-block;
`
export const SubTitle = styled.p``
export const Card = styled.div`
  border-radius: 20px;
  box-shadow: 0 40px 99px 0 rgba(139, 139, 139, 0.16);
  padding: 50px;
  background-color: #fff;

  & label > p {
    margin-bottom: 15px;
  }

  & input,
  & textarea {
    border-radius: 10px;
    border: solid 2px #d6d7e2;
    width: 100%;
    padding: 10px 20px;
    margin-bottom: 40px;

    &::placeholder {
      color: #66647e;
      line-height: 4;
    }
  }

  & input[type="submit"],
  & button[type="submit"] {
    background-color: #2a84eb;
    border: none;
    color: #fff;
    padding: 10px;
    width: 100%;

    &:hover {
      background-color: #2a84eb;
    }
  }
`
