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
      inventore veritatis et quasi
    </p>

    <form name="contacttest" method="POST" data-netlify="true">
      <p>
        <label>
          Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email: <input type="email" name="email" />
        </label>
      </p>

      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
)

export default Contactform
