import React from "react"

import Topbar from "../topbar"
import Footer from "../footer"

import GlobalStyles from "../../styles/globalStyles"

const Layout = ({ children, bgColorTopbar }) => {
  return (
    <>
      <GlobalStyles />
      <Topbar bgColorTopbar={bgColorTopbar} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
