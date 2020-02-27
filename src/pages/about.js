import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Typewriter from "typewriter-effect"
import BlockContent from "@sanity/block-content-to-react"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityCompanyInfo {
        _rawDescription
      }

      allSanityAuthor {
        edges {
          node {
            name
            corporate_title
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid_withWebp
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
      <section className="about">
        <h1>
          <Typewriter
            options={{
              strings: ["Who are we?", "What are we?", "Where are we?"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="animation  animation--fade-up ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi
        </p>

        <ol>
          {data.allSanityAuthor.edges.map(function(edge) {
            return (
              <li
                className="animation  animation--fade-up "
                key={edge.node._id}
              >
                <Img
                  key={edge.node._id}
                  fluid={edge.node.image.asset.fluid}
                  onLoad={timeOut}
                />
                <h3 key={edge.node._id}> {edge.node.name}</h3>
                <ol className="corporate_titles">
                  {edge.node.corporate_title.map(function(title) {
                    return <li>{title}</li>
                  })}
                </ol>
              </li>
            )
          })}
        </ol>
        <BlockContent
          blocks={data.sanityCompanyInfo._rawDescription}
          projectId="j7i4hfvy"
          dataset="production"
          className="allBlockContent"
        />
      </section>
    </Layout>
  )
}
export default About

function timeOut() {
  setTimeout(() => {
    initiateAnimations()
  }, 1200)
}

// animations

function initiateAnimations() {
  const allBlockContent = document.querySelector(".allBlockContent")
  const allChildrenElements = allBlockContent.children

  for (let index = 1; index < allChildrenElements.length; index++) {
    const element = allChildrenElements[index]
    element.classList.add("animation")
    element.classList.add("animation--fade-up")
  }
  // Reset opacity

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
