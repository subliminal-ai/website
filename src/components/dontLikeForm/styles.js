import styled from "styled-components"

export const Section = styled.section`
  padding: 50px 30px;

  @media (min-width: 780px) {
    padding: 100px 50px;
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
  @media (max-width: 780px) {
    &:first-child {
      margin-bottom: 30px;
    }
  }
`

export const Title = styled.h2`
  margin-bottom: 30px;
  display: inline-block;
`
export const Link = styled.a`
  color: #2a84eb;
  text-decoration: none;
  margin-right: 20px;
`
