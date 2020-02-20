import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Contactform from "../components/contactform"
import ProjectIcon from "../images/assets/projects.svg"
import AboutIcon from "../images/assets/about.svg"
import BlogIcon from "../images/assets/blog.svg"
import ContactIcon from "../images/assets/contact.svg"
import CloseIcon from "../images/assets/close.svg"
import Logo from "../images/assets/logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/" id="logo">
      <Logo />
    </Link>

    <Link to="/" activeClassName="activeLink">
      <ProjectIcon /> Projects
    </Link>
    <Link to="about" activeClassName="activeLink">
      <AboutIcon />
      About
    </Link>
    <Link to="blog" activeClassName="activeLink">
      <BlogIcon />
      Blog
    </Link>

    <button class="contact-button" onClick={openMenu}>
      <ContactIcon />
      <span>Contact</span>
    </button>

    <div class="menu">
      {/* <Logo />

      <span>Kodex</span>

      <a href="tel:+45 50 99 99 95">+45 50 99 99 95</a>
      <a href="mailto:contact@kodexcph.com">contact@kodexcph.com</a>

      <h2>Contact us</h2>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi
      </p> */}

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
