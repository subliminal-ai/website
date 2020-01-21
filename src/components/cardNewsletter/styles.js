import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
`

export const Content = styled.div`
  background-image: linear-gradient(
    47deg,
    #005ec9 -64%,
    #003eba 34%,
    #2a84eb 128%
  );
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
  font-size: 40px;
`

export const DescriptionCard = styled.p`
  @media (min-width: 600px) {
    font-size: 16px;
    margin-bottom: 50px;
  }
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
