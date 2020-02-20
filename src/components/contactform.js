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
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
    </form>
  </div>
)

export default Contactform
