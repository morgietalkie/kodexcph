import React from "react"
// import { Link } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import serializers from "../components/serializers"
import Footer from "../components/footer"

// import { func } from "prop-types"

export const query = graphql`
  query($Slug: String) {
    sanityProjects(slug: { current: { eq: $Slug } }) {
      seo {
        _key
        _type
        focus_keyword
        seo_title
        meta_description
      }
      title
      categories
      _rawBody
      websiteUrl
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
    allSanityProjects(
      limit: 3
      filter: { slug: { current: { ne: $Slug } } }
      sort: { order: DESC, fields: publishedAt }
    ) {
      edges {
        node {
          title
          publishedAt
          slug {
            current
          }
          mainImage {
            asset {
              fluid(maxWidth: 200) {
                ...GatsbySanityImageFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

const Project = (props) => {
  return (
    <Layout>
      <SEO
        title={props.data.sanityProjects.seo.seo_title}
        description={props.data.sanityProjects.seo.meta_description}
        image={props.data.sanityProjects.mainImage.asset.fluid.src}
      />
      <section id="projectPost">
        <Img
          alt={`Project: ${props.data.sanityProjects.title}`}
          fluid={props.data.sanityProjects.mainImage.asset.fluid}
          onLoad={imageIsLoaded}
          className="postImage"
        ></Img>

        <div className="content_wrapper">
          <ol>
            {props.data.sanityProjects.categories.map(function (category) {
              return (
                <li>
                  <p>{category} </p>
                  <span>+</span>
                </li>
              )
            })}
          </ol>
          <h1>{props.data.sanityProjects.title}</h1>

          <a href={props.data.sanityProjects.websiteUrl} className="visitSite">
            Visit site
          </a>

          <div>
            <BlockContent
              blocks={props.data.sanityProjects._rawBody}
              serializers={serializers}
              projectId="j7i4hfvy"
              dataset="production"
              className="allBlockContent"
            />
          </div>

          <div className="more_project_wrapper">
            <h2>More Projects</h2>

            <ol className=" more_project animation  animation--fade-up">
              {props.data.allSanityProjects.edges.map((edge) => {
                return (
                  <Link to={`/${edge.node.slug.current}`}>
                    <li>
                      <Img
                        fluid={edge.node.mainImage.asset.fluid}
                        alt={edge.node.title}
                      />
                    </li>
                  </Link>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      <Footer />
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

  // callback function to do animations
  const scrollImations = (entries, observer) => {
    entries.forEach((entry) => {
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
  animations.forEach((animation) => {
    observer.observe(animation)
  })
}

function imageIsLoaded() {
  initiateAnimations()
  window.addEventListener("scroll", scrollFunctionImage)
}

function scrollFunctionImage() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.querySelector(".postImage").classList.add("scaledIMG")
  } else {
    document.querySelector(".postImage").classList.remove("scaledIMG")
  }
}
