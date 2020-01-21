import styled from "styled-components"

export const Section = styled.section`
  padding: 50px 0;
  & > div {
    background: ${({ isLight }) => (isLight ? "#fff" : " #171441")};
  }
`
export const Title = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 16px;
  width: 100%;
  max-width: 1320px;
  padding: 0 25px;

  margin: 0 auto 34px;
  text-align: center;

  @media (min-width: 600px) {
    text-align: ${({ isLight }) => (isLight ? "center" : "left")};
    font-size: 18px;
  }

  @media (min-width: 600px) {
    font-size: 20px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: ${({ isLight }) => (isLight ? "center" : "space-between")};
  padding: 10px 25px;
`
export const Image = styled.img`
  margin-bottom: 0;
  width: 250px;

  @media (min-width: 600px) {
    width: 450px;
  }

  @media (min-width: 900px) {
    width: 600px;
  }

  @media (min-width: 1200px) {
    width: 895px;
  }
`
export const Anchor = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 4px;

  display: flex;
  align-items: center;
  white-space: nowrap;

  @media (min-width: 600px) {
    font-size: 8px;
  }

  @media (min-width: 900px) {
    font-size: 16px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
  }

  & > img {
    margin-bottom: 0;
    width: 5px;
    margin-left: 8px;

    @media (min-width: 600px) {
      width: 10px;
    }
    @media (min-width: 900px) {
      width: 13px;
    }
    @media (min-width: 1200px) {
      width: 17px;
    }
  }
`
