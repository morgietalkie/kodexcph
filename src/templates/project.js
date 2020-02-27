import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

export const query = graphql`
  query($Slug: String) {
    sanityProjects(slug: { current: { eq: $Slug } }) {
      title
      _rawBody
      body {
        sanityChildren {
          text
        }
      }
      mainImage {
        asset {
          fluid(maxWidth: 1400) {
            ...GatsbySanityImageFluid_withWebp
          }
        }
      }
    }
  }
`

const Project = props => {
  return (
    <Layout>
      <SEO title={props.data.sanityProjects.title} />
      <section id="projectPost">
        <Img
          fluid={props.data.sanityProjects.mainImage.asset.fluid}
          onLoad={imageIsLoaded}
          className="postImage"
        ></Img>

        <div className="content_wrapper">
          <h1>{props.data.sanityProjects.title}</h1>

          <a href="" className="visitSite">
            Visit site
          </a>

          <div>
            <BlockContent
              blocks={props.data.sanityProjects._rawBody}
              projectId="j7i4hfvy"
              dataset="production"
              className="allBlockContent"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Project

// animations

function initiateAnimations() {
  const allBlockContent = document.querySelector(".allBlockContent")
  const allChildrenElements = allBlockContent.children

  for (let index = 1; index < allChildrenElements.length; index++) {
    const element = allChildrenElements[index]
    element.classList.add("animation")
    element.classList.add("animation--fade-up")
  }

  // allChildrenElements.classList.add("animation")
  // allChildrenElements.classList.add("animation--fade-up")

  console.log(allBlockContent.children)

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

function imageIsLoaded() {
  initiateAnimations()
  window.addEventListener("scroll", scrollFunctionImage)
}

function scrollFunctionImage() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    console.log(document.querySelector(".gatsby-image-wrapper"))

    document.querySelector(".gatsby-image-wrapper").classList.add("scaledIMG")
  } else {
    document
      .querySelector(".gatsby-image-wrapper")
      .classList.remove("scaledIMG")
  }
}
