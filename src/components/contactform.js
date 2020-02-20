import React from "react"

import Logo from "../images/assets/logo.svg"

const Contactform = ({ siteTitle }) => (
  <div class="contact_form">
    <Logo />

    <span>Kodex</span>

    <a href="tel:+45 50 99 99 95">+45 50 99 99 95</a>
    <a href="mailto:contact@kodexcph.com">contact@kodexcph.com</a>

    <h2>Contact us</h2>

    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi{" "}
    </p>

    <form
      name="contact-test"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="Contact Form" />

      <label>
        Name
        <input type="text" name="name" id="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" required />
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
