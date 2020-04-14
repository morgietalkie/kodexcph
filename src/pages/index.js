import React from "react"
// import { Link } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Logo from "../images/assets/logo.svg"
import { func } from "prop-types"
// import RewriteMarkdown from "../components/RewriteMarkdown"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityProjects(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            seo {
              meta_description
            }
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

        <div className="horizontal-scroll-wrapper squares ">
          {data.allSanityProjects.edges.map(function (edge, i) {
            return (
              <Link className="link_wrappers" to={edge.node.slug.current}>
                <div className="scrolls" key={i}>
                  <h2 className="project_title" key={i}>
                    {edge.node.title}
                  </h2>
                  <Img
                    alt={`Project: ${edge.node.title}`}
                    className="project_image"
                    key={i}
                    fluid={edge.node.mainImage.asset.fluid}
                    onLoad={detectScroll}
                  />
                  <div className="gatsby-image-wrapper-overlay"></div>
                </div>

                <div className="additional_text">
                  <span className="span_title"> {edge.node.title}</span>
                  <span className="span_title"> {edge.node.title}</span>
                  <span className="span_title"> {edge.node.title}</span>
                  <span className="span_title"> {edge.node.title}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
let allClients = []
let firstClient = ""
let firstcln = ""
let lastClient = ""
let lastcln = ""

function detectScroll() {
  if (window.innerWidth > 1024) {
    document.querySelector("body").addEventListener("wheel", scrolled)
  }
}

function scrolled(event) {
  if (event.deltaY > 0 || event.deltaX > 0) {
    document.querySelector("body").removeEventListener("wheel", scrolled)
    document.querySelectorAll("project_image").forEach((image) => {
      image.onLoad = null
    })

    console.log(event)
    nextSlide()
  }
}

function nextSlide() {
  let slideWrapper = document.querySelector(".horizontal-scroll-wrapper")
  console.log(slideWrapper)
  let firstScroll = slideWrapper.firstChild

  slideWrapper.style.transition = "0.8s"

  document.querySelectorAll(".link_wrappers").forEach((link) => {
    link.querySelector(".gatsby-image-wrapper-overlay").style.opacity = "1"
    link.querySelector("h2").style.opacity = "0"
    link.querySelector(".additional_text").style.opacity = "0"
  })

  slideWrapper.children[1].querySelector(
    ".gatsby-image-wrapper-overlay"
  ).style.opacity = "0"
  slideWrapper.children[1].querySelector("h2").style.opacity = "1"
  slideWrapper.children[1].querySelector(".additional_text").style.opacity = "1"
  slideWrapper.style.marginLeft = "-600px"
  firstcln = firstScroll.cloneNode(true)
  slideWrapper.appendChild(firstcln)

  setTimeout(() => {
    slideWrapper.style.transition = "0s"
    slideWrapper.style.marginLeft = "0"
    firstScroll.parentNode.removeChild(firstScroll)
    detectScroll()
  }, 1500)
}
