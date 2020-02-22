import React from "react"
import { Link } from "gatsby"
import Logo from "../images/assets/logo.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Footer = () => (
  <footer>
    <div className="logo_wrapper">
      <div>
        <Logo></Logo>
        <h4>Kodex</h4>
      </div>
    </div>
  </footer>
)

export default Footer
