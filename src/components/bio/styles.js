import styled from "styled-components"
import Image from "gatsby-image"
import { AiOutlineInstagram } from "react-icons/ai"

export const InstagramIcon = styled(AiOutlineInstagram).attrs({
  color: "#2a84eb",
})`
  vertical-align: middle;
`

export const Avatar = styled(Image).attrs({
  imgStyle: {
    borderRadius: `50%`,
  },
})`
  margin-right: 30px;
  margin-bottom: 0;
  min-width: 100px;
  border-radius: 100%;
`

export const Row = styled.div`
  display: flex;
  margin-bottom: 30px;
`

export const Title = styled.p`
  margin-bottom: 40px;
  font-weight: 700;
`
