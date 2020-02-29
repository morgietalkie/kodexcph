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
                fluid(maxWidth: 300) {
                  ...GatsbySanityImageFluid_withWebp
                }
              }
            }
          }
        }
      }
      sanityPages(_id: { eq: "590b8320-d955-4deb-a2e1-6b50169f192a" }) {
        seo {
          _type
          focus_keyword
          seo_title
          meta_description
          _key
        }
        title
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={data.sanityPages.seo.seo_title}
        description={data.sanityPages.seo.meta_description}
      />
      <section id="blog">
        <h1>Updates and insights</h1>

        <ol>
          {data.allSanityPost.edges.map(edge => {
            return (
              <Link to={`/blog/${edge.node.slug.current}`}>
                <li>
                  <Img
                    fluid={edge.node.mainImage.asset.fluid}
                    alt={edge.node.title}
                  />
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
