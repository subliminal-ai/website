import styled from "styled-components"
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

export const Wrapper = styled.div`
  padding: 50px 0;
`
export const Title = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
`

export const Row = styled.div`
  text-align: center;

  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ isAside }) => (isAside ? "column" : "row")};

  & > * {
    padding: ${({ isAside }) => (isAside ? "10px 0" : "0 7.5px")};
  }

  & small {
    display: none;
    vertical-align: bottom;

    @media (min-width: 600px) {
      display: ${({ isAside }) => (isAside ? "none" : "inline")};
    }
  }
`

export const FacebookIcon = styled(AiFillFacebook)`
  vertical-align: middle;
  width: 16px;
  margin-right: 5px;
`
export const TwitterIcon = styled(AiOutlineTwitter)`
  vertical-align: middle;
  width: 20px;
  margin-right: 5px;
`
export const LinkedinIcon = styled(FaLinkedinIn)`
  vertical-align: middle;
  margin-right: 5px;
`
