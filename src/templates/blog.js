import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

export const query = graphql`
  query($Slug: String) {
    sanityPost(slug: { current: { eq: $Slug } }) {
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

const BLog = props => {
  return (
    <Layout>
      <SEO title={props.data.sanityPost.title} />
      <section id="blogPost">
        <Img fluid={props.data.sanityPost.mainImage.asset.fluid}></Img>

        <h1>{props.data.sanityPost.title}</h1>
        <div>
          <BlockContent
            blocks={props.data.sanityPost._rawBody}
            projectId="j7i4hfvy"
            dataset="production"
          />
        </div>
      </section>
    </Layout>
  )
}

export default BLog
