import React from "react"
// import { Link } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Logo from "../images/assets/logo.svg"
// import RewriteMarkdown from "../components/RewriteMarkdown"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProjects {
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
        <Logo />
        <h1>Kodex</h1>
        <h2>Modern webistes with a nordic touch</h2>

        <ol>
          {data.allSanityProjects.edges.map(edge => {
            return (
              <Link to={edge.node.slug.current}>
                <li>
                  <h3>{edge.node.title}</h3>
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
