import React from "react"
import { Link } from "gatsby"
import Logo from "../images/assets/logo.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Footer = () => (
  <footer>
    <div className="logo_wrapper">
      <div className="logo_box">
        <Logo></Logo>
        <h4>Kodex</h4>
      </div>
    </div>

    <div>
      <h5>Kodex </h5>
      <p>CVR: 40171622</p>
      <p>Nansensgade 5 st. tv.</p>
      <p>1366, Copenhagen</p>
      <p>Denmark</p>
    </div>
    <div>
      <h5>Contact us</h5>
      <a href="tel:+45 50 99 99 95">+45 50 99 99 95</a>
      <a href="mailto:contact@kodexcph.com">contact@kodexcph.com</a>
    </div>
    <div>
      <h5>Follow us</h5>
      <a href="">LinkedIn</a>
      <a href="">Facebook</a>
      <a href="">Instagram</a>
    </div>
  </footer>
)

export default Footer
