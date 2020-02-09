import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/gatsby-images/logo"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/" id="logo">
      <Logo />
    </Link>

    <div id="burger_menu" class="" onClick={openMenu}>
      <div></div>
      <div></div>
    </div>
    <div class="menu" onClick={openMenu}>
      <Link to="/">Projects</Link>
      <Link to="blog">Blog</Link>
      <Link to="about">About</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

function openMenu(e) {
  document.querySelector("#burger_menu").classList.toggle("open_menu")
  document.querySelector(".menu").classList.toggle("open_menu")
  document.querySelector(".menu").classList.toggle("menu_slide")
  console.log(e.target.children[0])
}
