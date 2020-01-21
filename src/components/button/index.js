import styled, { css } from "styled-components"

const Button = styled.a`
  width: 200px;
  height: 58px;
  background: #2a84eb;
  color: #fff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  box-shadow: -12px 12px 0px -1px ${({ bgShadow }) => (bgShadow ? bgShadow : "#fff")},
    -12px 12px 0 1px #2a84eb;

  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0;
  cursor: pointer;
  transition: all ease 300ms;

  &:hover {
    box-shadow: 0 0 0 -1px ${({ bgShadow }) => (bgShadow ? bgShadow : "#fff")},
      0 0 0 #2a84eb;
  }

  ${({ responsive }) =>
    responsive &&
    css`
      @media (max-width: 600px) {
        width: 100px;
        height: 30px;
        font-size: 8px;
        box-shadow: -6px 6px 0px -1px ${({ bgShadow }) => (bgShadow ? bgShadow : "#fff")},
          -6px 6px 0 1px #2a84eb;
      }
    `}
`

export const ButtonSmall = styled(Button)`
  width: 100px;
  height: 30px;
  font-size: 8px;
  box-shadow: -6px 6px 0px -1px #fff, -6px 6px 0 1px #2a84eb;
`

export default Button
