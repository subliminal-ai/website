import styled from "styled-components"

export const Hero = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${({ bgHero }) => (bgHero ? bgHero : "")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 250px;
  /* padding: 0 45px; */

  @media (min-width: 600px) {
    height: 450px;
  }

  @media (min-width: 900px) {
    height: 600px;
  }

  @media (min-width: 1200px) {
    height: 847px;
  }
`

export const Title = styled.h1`
  width: 100%;
  max-width: 1040px;
  text-align: center;
  padding: 0 45px;

  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  color: #ffffff;

  font-size: 15px;
  line-height: 23px;
  font-weight: 700;
  margin-bottom: 0;

  @media (min-width: 600px) {
    font-size: 30px;
    line-height: 45px;
  }

  @media (min-width: 900px) {
    font-size: 45px;
    line-height: 60px;
  }

  @media (min-width: 1200px) {
    font-size: 60px;
    line-height: 90px;
  }
`

export const Category = styled.div`
  width: 80px;
  height: 28px;
  border-radius: 18px;
  background-color: #ffffff;

  color: #2a84eb;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 18px;
  margin-top: auto;

  font-size: 12px;

  @media (min-width: 900px) {
    width: 119px;
    height: 36px;
  }
`

export const ContentPost = styled.section`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 30px;
`

export const Footer = styled.footer`
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 30px;
`

export const Line = styled.hr`
  background: #d6d7e2;
  margin-bottom: 40px;
`

export const WrapperInfo = styled.div`
  background: #fff;
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: -1px;
  position: relative;

  padding: 20px 30px;

  @media (min-width: 600px) {
    padding: 40px 30px;
  }

  @media (min-width: 900px) {
    padding: 50px 80px;
  }

  @media (min-width: 1200px) {
    max-width: 1250px;
    padding: 50px 170px;
    border-radius: 30px 30px 0 0;
  }
`
export const Info = styled.div``
export const InfoTitle = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  color: #353167;
  text-transform: uppercase;
  font-size: 8px;

  @media (min-width: 600px) {
    font-size: 16px;
  }
`

export const Media = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

export const Avatar = styled.img`
  margin-bottom: 0;
  width: 12px;
  height: 12px;
  border-radius: ${({ icon }) => (icon ? "0" : "50%")};
  overflow: hidden;
  margin-right: 4px;
`
export const Name = styled.p`
  text-align: left;
  margin-bottom: 0;
  font-size: 8px;

  @media (min-width: 600px) {
    font-size: 16px;
  }
`

export const SideShare = styled.div`
  & > * {
    display: block;
    margin-bottom: 12px;
  }

  @media (min-width: 1200px) {
    position: absolute;
    top: 180px;
    left: 60px;

    & > * {
      margin-bottom: 25px;
    }
  }
`
