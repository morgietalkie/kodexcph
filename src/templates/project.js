import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

export const query = graphql`
  query($Slug: String) {
    sanityProjects(slug: { current: { eq: $Slug } }) {
      title
      _rawBody
      body {
        sanityChildren {
          text
        }
      }
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

const Project = props => {
  return (
    <Layout>
      <SEO title={props.data.sanityProjects.title} />
      <section id="projectPost">
        <h1>{props.data.sanityProjects.title}</h1>
        <Img fluid={props.data.sanityProjects.mainImage.asset.fluid}></Img>
        <div>
          <BlockContent
            blocks={props.data.sanityProjects._rawBody}
            projectId="j7i4hfvy"
            dataset="production"
          />
        </div>
      </section>
    </Layout>
  )
}

export default Project
