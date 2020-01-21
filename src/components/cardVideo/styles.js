import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
`

export const Content = styled.div`
  background-color: #2a84eb;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(209, 211, 214, 0.2);
  overflow: hidden;
  color: #fff;
  padding: 50px;
`

export const HeaderCard = styled.img`
  width: 100%;
  max-height: 288px;
`

export const TitleCard = styled.h4`
  color: #fff;
  font-size: 25px;
  text-align: center;
  line-height: 1.75;

  @media (min-width: 600px) {
    font-size: 40px;
  }
`

export const Play = styled.a`
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;

  @media (min-width: 600px) {
    font-size: 25px;
  }

  &:first {
    margin-right: 10px;
  }
`
