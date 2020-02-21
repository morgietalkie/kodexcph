import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MailSend = () => (
  <Layout>
    <SEO title="Mail send succesfully" />
    <div className="mail_wrapper">
      <h1>Mail sendt succesfully</h1>
      <p>We'll get back to you as soon as possible</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default MailSend
