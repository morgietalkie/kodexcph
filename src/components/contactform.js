import { Link } from "gatsby"
import React from "react"

import Logo from "../images/assets/logo.svg"

const Contactform = ({ siteTitle }) => (
  <div class="contact_form">
    <Logo />

    <span>Kodex</span>

    <a href="+45 50 99 99 95">+45 50 99 99 95</a>
    <a href="contact@kodexcph.com">contact@kodexcph.com</a>

    <h2>Contact us</h2>

    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi{" "}
    </p>

    <form
      method="post"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input name="name" type="text" placeholder="Your name*" />
      <input name="name2" type="text" placeholder="Your name2*" />
      <textarea name="message" placeholder="Message" />

      <button>Send</button>
    </form>
  </div>
)

export default Contactform
