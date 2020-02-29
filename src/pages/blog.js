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
            publishedAt
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
      <SEO title="blog" />
      <section id="blog">
        <h1>Updates and insights</h1>

        <ol>
          {data.allSanityPost.edges.map(edge => {
            return (
              <Link to={`/blog/${edge.node.slug.current}`}>
                <li>
                  <Img fluid={edge.node.mainImage.asset.fluid} />
                  <h2>{edge.node.title}</h2>
                  <h3>Published at: {edge.node.publishedAt}</h3>
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
