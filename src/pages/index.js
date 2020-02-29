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
    }
  `)

  return (
    <Layout>
      <SEO title="Projects" />
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

// function handleClick(e) {
//   e.preventDefault()

//   let ElementsToFadeOut = document.querySelectorAll(".fadeOut")

//   ElementsToFadeOut.forEach(element => {
//     element.classList.add("fadeOutActivated")
//   })

//   let LoadURL = e.currentTarget

//   setTimeout(() => {
//     window.location.href = LoadURL
//   }, 200)
// }
