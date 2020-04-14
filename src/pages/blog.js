import React from "react"
// import { Link } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/footer"

// import RewriteMarkdown from "../components/RewriteMarkdown"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost(sort: { order: DESC, fields: publishedAt }) {
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
        <h1 className="animation  animation--fade-up ">Updates and insights</h1>

        <ol>
          {data.allSanityPost.edges.map(edge => {
            return (
              <Link
                className="animation  animation--fade-up"
                to={`/blog/${edge.node.slug.current}`}
              >
                <li>
                  <Img
                    fluid={edge.node.mainImage.asset.fluid}
                    onLoad={initiateAnimations}
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
      <Footer />
    </Layout>
  )
}

export default IndexPage

function initiateAnimations() {
  // allChildrenElements.classList.add("animation")
  // allChildrenElements.classList.add("animation--fade-up")

  // callback function to do animations
  const scrollImations = (entries, observer) => {
    entries.forEach(entry => {
      // only do animation if the element is fully on screen
      if (entry.isIntersecting && entry.intersectionRatio >= 0) {
        entry.target.classList.add("animation--visible")
      } else {
      }
    })
  }

  // create the observer
  const options = {
    threshold: 0.2,
  }
  const observer = new IntersectionObserver(scrollImations, options)

  // target the elements to be observed
  const animations = document.querySelectorAll(".animation")
  animations.forEach(animation => {
    observer.observe(animation)
  })
}
