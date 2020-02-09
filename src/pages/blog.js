import React from "react"
// import { Link } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import RewriteMarkdown from "../components/RewriteMarkdown"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allSanityPost {
        edges {
          node {
            title
            slug {
              current
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
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <section id="index">
        <h1>Kodex</h1>
        <p>Modern webistes with a nordic touch</p>

        <ol>
          {data.allSanityPost.edges.map(edge => {
            return (
              <Link to={edge.node.slug.current}>
                <li>
                  <h2>{edge.node.title}</h2>
                  <p></p>
                  <Img fluid={edge.node.mainImage.asset.fluid} />
                </li>
              </Link>
            )
          })}
        </ol>
      </section>
    </Layout>
  )
}

export default IndexPage
