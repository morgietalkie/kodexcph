import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

export const query = graphql`
  query($Slug: String) {
    sanityPost(slug: { current: { eq: $Slug } }) {
      title
      publishedAt
      author {
        name
      }
      categories
      _rawBody
      body {
        sanityChildren {
          text
        }
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
`

const BLog = props => {
  return (
    <Layout>
      <SEO title={props.data.sanityPost.title} />
      <section id="blogPost">
        <h1>{props.data.sanityPost.title}</h1>

        <div className="blogPostInfo">
          <span>|</span>

          <p>Written by: {props.data.sanityPost.author.name}</p>
          <span>|</span>
          <p>Published: {props.data.sanityPost.publishedAt}</p>
          <span>|</span>
        </div>

        <Img
          onLoad={initiateAnimations}
          fluid={props.data.sanityPost.mainImage.asset.fluid}
        ></Img>
        <ol>
          {props.data.sanityPost.categories.map(function(category) {
            return <li>{category}</li>
          })}
        </ol>
        <div>
          <BlockContent
            className="allBlockContent"
            blocks={props.data.sanityPost._rawBody}
            projectId="j7i4hfvy"
            dataset="production"
          />
        </div>
      </section>
    </Layout>
  )
}

export default BLog

function initiateAnimations() {
  const allBlockContent = document.querySelector(".allBlockContent")
  const allChildrenElements = allBlockContent.children

  for (let index = 0; index < allChildrenElements.length; index++) {
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
