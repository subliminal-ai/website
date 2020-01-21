import styled from "styled-components"

export const Wrapper = styled.div`
  /* padding: 10px; */
  width: 100%;
  /* max-width: 869px; */
`

export const Content = styled.a`
  display: block;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(209, 211, 214, 0.2);
  overflow: hidden;
  height: 100%;
  text-decoration: none;
`

export const HeaderCard = styled.img`
  width: 100%;
  height: 100%;
  max-height: 288px;
  object-fit: cover;
`

export const TitleCard = styled.h4`
  padding: 0 30px;
`

export const Info = styled.div`
  padding: 0 30px;
  margin-bottom: 20px;
`

export const Tag = styled.span`
  color: #2a84eb;
  font-weight: 600;
  margin-right: 7px;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`
export const Time = styled.span`
  color: #848e9e;
  font-weight: 300;
  @media (min-width: 600px) {
    font-size: 16px;
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
export const Media = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 30px 30px;
`
export const Avatar = styled.img`
  margin-bottom: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 7px;
`
export const Name = styled.h5`
  text-align: left;
  margin-bottom: 0;

  @media (min-width: 600px) {
    font-size: 16px;
  }
`
export const DescriptionCard = styled.p`
  padding: 0 30px;
  color: #353167;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`
