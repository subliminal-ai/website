import React from "react"

import { Buttom, TopLine, MiddleLine, BottomLine } from "./styles"

const HamburguerButton = ({ setIsOpen, isOpen }) => (
  <Buttom onClick={() => setIsOpen(!isOpen)}>
    <TopLine isOpen={isOpen} />
    <MiddleLine isOpen={isOpen} />
    <BottomLine isOpen={isOpen} />
  </Buttom>
)

export default HamburguerButton
