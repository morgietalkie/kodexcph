import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Contactform from "../components/contactform"
import ProjectIcon from "../images/assets/projects.svg"
import AboutIcon from "../images/assets/about.svg"
import BlogIcon from "../images/assets/blog.svg"
import ContactIcon from "../images/assets/contact.svg"
import CloseIcon from "../images/assets/close.svg"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">
      <ProjectIcon /> Projects
    </Link>
    <Link to="about">
      <AboutIcon />
      About
    </Link>
    <Link to="blog">
      <BlogIcon />
      Blog
    </Link>

    <div class="contact-button" onClick={openMenu}>
      <ContactIcon />
    </div>

    <div class="menu">
      <div class="close-button" onClick={openMenu}>
        <CloseIcon />
      </div>

      <Contactform />
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
  document.querySelector(".menu").classList.toggle("open_menu")
  document.querySelector(".menu").classList.toggle("menu_slide")
  console.log(e.target.children[0])
}
