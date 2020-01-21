import styled from "styled-components"
import { Link } from "gatsby"

import { IoMdGlobe } from "react-icons/io"

export const ContainerFooter = styled.footer`
  padding: 50px 25px 0;
`

export const Wrapper = styled.div`
  @media (min-width: 600px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    width: 100%;
    max-width: 1320px;
    margin: 0 auto 50px;
  }
`

export const WrapperNavFooter = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;

  @media (min-width: 600px) {
    flex: 1;
    justify-content: flex-start;
    margin-right: 30px;
    margin-bottom: 0;
  }
`
export const NavFooter = styled.div`
  @media (min-width: 600px) {
    &:nth-child(1) {
      margin-right: 100px;
    }
  }
`
export const Title = styled.h3`
  margin-bottom: 30px;
`
export const LinkTo = styled(Link)`
  display: block;
  color: #353167;
  text-decoration: none;
  margin-bottom: 30px;
  font-weight: 500;
`
export const InTouch = styled.div`
  border-bottom: 1px solid #1f256d;
  margin-bottom: 40px;
`
export const TitleForm = styled.h3`
  margin-bottom: 20px;
`
export const DescriptionForm = styled.p`
  color: #727290;
`
export const Form = styled.form``
export const EmailInput = styled.input`
  border: none;
  width: calc(100% - 100px);
  font-size: 16px;
  color: #353167;
  font-weight: 500;
  outline: none;

  &::placeholder {
    color: #727290;
    font-weight: 500;
    font-size: 16px;
  }
`
export const Send = styled.button`
  text-transform: uppercase;
  color: #353167;
  background: transparent;
  outline: none;
  border: 0;
  font-weight: 600;
  width: 100px;

  & > img {
    margin-bottom: 0;
  }
`

export const FooterNote = styled.div`
  text-align: center;

  @media (min-width: 700px) {
    display: flex;
    font-size: 14px;
    justify-content: space-between;

    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
  }
`
export const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`
export const Language = styled.p`
  margin-bottom: 20px;

  @media (min-width: 700px) {
    margin-left: auto;
    margin-right: 30px;
  }
`
export const Copy = styled.p``
export const IconGlobe = styled(IoMdGlobe)``
