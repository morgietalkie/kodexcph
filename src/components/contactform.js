import React from "react"

export default () => (
  <form
    className="contact_form"
    name="imdone"
    method="post"
    action="/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <div className="input_wrapper">
      <input type="text" name="name" id="name" required />
      <label htmlFor="name">Name</label>
    </div>
    <div className="input_wrapper">
      <input type="text" name="email" id="email" required />
      <label htmlFor="email">Email</label>
    </div>
    <div className="input_wrapper">
      <textarea name="message" id="message" rows="6" required />
      <label htmlFor="message">Message</label>
    </div>
    <div>
      <input className="sendButton" type="submit" value="Send" />
    </div>
  </form>
)
