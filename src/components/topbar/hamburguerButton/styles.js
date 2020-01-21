import styled, { css } from "styled-components"

export const Buttom = styled.button`
  width: 40px;
  height: 30px;
  display: block;
  position: relative;
  margin: 0;
  padding: 0;

  z-index: 1000;
  border: none;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  outline: none;
  z-index: 1501;

  cursor: pointer;
`

export const Line = styled.span`
  height: 4px;
  border-radius: 9px;
  opacity: 1;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  background: #1f256d;
  width: 40px;
  transition: 300ms ease-in-out;
`

export const TopLine = styled(Line)`
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(13px) rotate(135deg);
    `}
`
export const MiddleLine = styled(Line)`
  width: 70%;
  ${({ isOpen }) =>
    isOpen &&
    css`
      background: transparent;
    `}
`
export const BottomLine = styled(Line)`
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(-13px) rotate(-135deg);
    `}
`
