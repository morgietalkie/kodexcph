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
                <li className="animation animation--fade-up">
                  <h3>{edge.node.title}</h3>
                  <p></p>
                  <Img
                    fluid={edge.node.mainImage.asset.fluid}
                    onLoad={initiateAnimations}
                  />
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

// animations

function initiateAnimations() {
  if (window.innerWidth > 480) {
    // callback function to do animations
    const scrollImations = (entries, observer) => {
      entries.forEach(entry => {
        // only do animation if the element is fully on screen
        if (entry.isIntersecting && entry.intersectionRatio >= 0) {
          // entry.target.classList.add("animation--visible")
          entry.target.style.opacity = entry.intersectionRatio
        }
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
          entry.target.style.opacity = "0"
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
  } else {
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
}
