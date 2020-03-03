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
            _id
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
      sanityPages(_id: { eq: "db68df85-d952-4844-a8ea-b0b72ae8f3c7" }) {
        seo {
          _type
          focus_keyword
          seo_title
          meta_description
          _key
        }
        title
        _id
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title={data.sanityPages.seo.seo_title}
        description={data.sanityPages.seo.meta_description}
      />
      <section id="index">
        <Logo />
        <h1>Kodex</h1>
        <h2>Modern webistes with a nordic touch</h2>

        <ol>
          {data.allSanityProjects.edges.map(function(edge, i) {
            return (
              <Link to={edge.node.slug.current}>
                <li className="animation  animation--fade-up " key={i}>
                  <Img
                    alt={`Project: ${edge.node.title}`}
                    className="img-hover-effect"
                    key={i}
                    fluid={edge.node.mainImage.asset.fluid}
                    onLoad={initiateAnimations}
                  />
                  <h3 key={i}>{edge.node.title}</h3>
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
  // Reset opacity

  if (window.innerWidth > 1024) {
    // callback function to do animations
    const scrollImations = (entries, observer) => {
      entries.forEach(entry => {
        // only do animation if the element is fully on screen
        if (entry.intersectionRatio !== 1) {
          entry.target.style.width = "500px"
        } else {
          entry.target.style.width = "580px"
        }
      })
    }

    // create the observer
    const options = {
      threshold: 1,
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
