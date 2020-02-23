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
    <Layout className="fadeOut">
      <SEO title="Home" />
      <section id="index">
        <Logo className="fadeOut" />
        <h1 className="fadeOut">Kodex</h1>
        <h2 className="fadeOut">Modern webistes with a nordic touch</h2>

        <ol>
          {data.allSanityProjects.edges.map(edge => {
            return (
              <Link to={edge.node.slug.current} onClick={handleClick}>
                <li className="animation fadeOut animation--fade-up fadeOutOnClick">
                  <h3 className="fadeOut">{edge.node.title}</h3>
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
  if (window.innerWidth > 1024) {
    // callback function to do animations
    const scrollImations = (entries, observer) => {
      entries.forEach(entry => {
        // only do animation if the element is fully on screen
        if (entry.intersectionRatio !== 1) {
          entry.target.style.width = "500px"
        } else {
          entry.target.style.opacity = "1"
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

function handleClick(e) {
  e.preventDefault()
  console.log(e.currentTarget)
  e.target.style.opacity = "0"

  let ElementsToFadeOut = document.querySelectorAll(".fadeOut")

  ElementsToFadeOut.forEach(element => {
    element.style.opacity = "0"
  })

  let LoadURL = e.currentTarget

  setTimeout(() => {
    window.location.href = LoadURL
  }, 200)
}
