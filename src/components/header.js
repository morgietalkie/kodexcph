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

// Requiring function causes error during builds
// as the code tries to reference window
const module = require("module") // Error

// Wrap the require in check for window
if (typeof window !== `undefined`) {
  const module = require("module")
  console.log(module)
}

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

    <button className="contact-button" onClick={openMenu}>
      <ContactIcon />
      <span>Contact</span>
    </button>

    <div className="menu">
      <div id="scrollable">
        <Logo />

        <span>Kodex</span>

        <a href="tel:+45 50 99 99 95">+45 50 99 99 95</a>
        <a href="mailto:contact@kodexcph.com">contact@kodexcph.com</a>

        <h2>Contact us</h2>

        <p>
          We are open to making new acquaintances! Interested in getting to know
          us a bit better or just want to come over for a coffee? <br />
          <strong>Get in touch</strong> 👇
        </p>

        <Contactform />

        <div className="close-button" onClick={openMenu}>
          <CloseIcon />
        </div>
      </div>
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

document.body.addEventListener("scroll", scrollFunction)

function scrollFunction() {
  if (window.innerWidth > 1023) {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.querySelector("header").style.backgroundColor = "#ffffff"
    } else {
      document.querySelector("header").style.backgroundColor = "#ffffff00"
    }
  }
}
