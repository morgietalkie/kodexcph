import React from "react"
import Logo from "../images/assets/logo.svg"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityCompanyInfo {
        email
        facebook
        instagram
        name
        linkedin
        country
        copyrights
        city
        address
        phone
        slogan
        zipCode
        cvr
      }
    }
  `)

  return (
    <footer>
      <div className="logo_wrapper">
        <div className="logo_box">
          <Logo></Logo>
          <h4>{data.sanityCompanyInfo.name}</h4>
        </div>
      </div>

      <div>
        <h5>{data.sanityCompanyInfo.name}</h5>
        <p>CVR: {data.sanityCompanyInfo.cvr}</p>
        <p>{data.sanityCompanyInfo.address}</p>
        <p>
          {data.sanityCompanyInfo.zipCode}, {data.sanityCompanyInfo.city}
        </p>
        <p>{data.sanityCompanyInfo.country}</p>
      </div>
      <div>
        <h5>Contact us</h5>
        <a href={`tel:${data.sanityCompanyInfo.phone}`}>
          +45 {data.sanityCompanyInfo.phone}
        </a>
        <a href={`mailto:${data.sanityCompanyInfo.email}`}>
          {data.sanityCompanyInfo.email}
        </a>
      </div>
      <div>
        <h5>Follow us</h5>
        <a href={data.sanityCompanyInfo.linkedin}>LinkedIn</a>
        <a href={data.sanityCompanyInfo.facebook}>Facebook</a>
        <a href={data.sanityCompanyInfo.instagram}>Instagram</a>
      </div>
    </footer>
  )
}

export default Footer
