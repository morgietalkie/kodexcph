import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityAuthor {
        edges {
          node {
            name
            image {
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
      <SEO title="About" />
      <h1>Who are we?</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi
      </p>

      <ol>
        {data.allSanityAuthor.edges.map(edge => {
          return (
            <li className="animation  animation--fade-up ">
              <p></p>
              <Img
                fluid={edge.node.image.asset.fluid}
                onLoad={initiateAnimations}
              />
              <h3>{edge.node.name}</h3>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

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

export default SecondPage
