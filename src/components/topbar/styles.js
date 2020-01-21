import styled from "styled-components"
import { Link as LinkGatsby } from "gatsby"
import Img from "gatsby-image"

export const Container = styled.div`
  background-color: ${({ bgColorTopbar }) =>
    bgColorTopbar ? bgColorTopbar : "#fff"};
  margin-bottom: -1px;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 20px 25px;
  background-color: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 900px) {
    padding: 20px 0 20px 25px;
  }
`

export const Logo = styled(Img).attrs({
  imgStyle: {
    margin: 0,
  },
})`
  margin: 0;
`

export const Nav = styled.nav`
  position: fixed;
  background-color: #fffffff8;
  top: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
  left: 0;
  width: 100%;
  height: 100vh;
  transition: 400ms ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;

  @media (min-width: 900px) {
    position: initial;
    height: 100%;
    background-color: transparent;
  }
`

export const List = styled.ul`
  list-style: none;
  margin: 0;

  @media (min-width: 900px) {
    display: flex;
    margin-left: auto;
  }
`
export const Item = styled.li`
  margin: 0;
  padding: 5px 20px;

  display: flex;
  align-items: center;

  @media (min-width: 1000px) {
    padding: 5px 25px;
  }
`

export const Link = styled(LinkGatsby).attrs({
  activeStyle: {
    color: "#2a84eb",
  },
})`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: #1f256d;

  word-wrap: none;
  transition: color ease 200ms;

  &:hover {
    color: #2a84eb;
  }
`
