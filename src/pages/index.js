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
                fluid(maxWidth: 550) {
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
      sanityCompanyInfo {
        slogan
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

        <h1>{data.sanityCompanyInfo.slogan}</h1>

        <div className="horizontal-scroll-wrapper squares">
          {data.allSanityProjects.edges.map(function (edge, i) {
            return (
              <Link className="link_wrappers" to={edge.node.slug.current}>
                <div
                  className="scrolls animation  animation--fade-in-mobile"
                  key={i}
                >
                  <h2 className="project_title" key={i}>
                    {edge.node.title}
                  </h2>
                  <Img
                    alt={`Project: ${edge.node.title}`}
                    className="project_image"
                    key={i}
                    fluid={edge.node.mainImage.asset.fluid}
                    onLoad={detectScroll}
                    loading="eager"
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

        <div className="scroll_block"></div>
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
  if (window.innerWidth > 1024 || window.innerWidth === 1024) {
    document.querySelector("body").addEventListener("wheel", scrolled)
    document
      .querySelector("body")
      .addEventListener("touchstart", nextSlide, false)
  }

  initiateAnimations()
}

function scrolled(event) {
  if (event.deltaY > 0 || event.deltaX > 0) {
    document.querySelector("body").removeEventListener("wheel", scrolled)
    document.querySelectorAll(".project_image").forEach((image) => {
      image.onLoad = null
    })

    nextSlide()
  }
}

function nextSlide() {
  document
    .querySelector("body")
    .removeEventListener("touchstart", nextSlide, false)

  let slideWrapper = document.querySelector(".horizontal-scroll-wrapper")
  let firstScroll = slideWrapper.firstChild

  slideWrapper.style.transition = "0.8s"

  document.querySelectorAll(".link_wrappers").forEach((link) => {
    link.querySelector(".gatsby-image-wrapper-overlay").style.opacity = "1"
    link.querySelector("h2").style.opacity = "0"
    link.querySelector(".additional_text").style.opacity = "0"
    link.style.pointerEvents = "none"
  })

  slideWrapper.children[1].querySelector(
    ".gatsby-image-wrapper-overlay"
  ).style.opacity = "0"
  slideWrapper.children[1].querySelector("h2").style.opacity = "1"
  slideWrapper.children[1].querySelector(".additional_text").style.opacity =
    "0.4"
  slideWrapper.children[1].style.pointerEvents = "auto"
  slideWrapper.style.marginLeft = "-610px"
  firstcln = firstScroll.cloneNode(true)
  slideWrapper.appendChild(firstcln)

  setTimeout(() => {
    slideWrapper.style.transition = "0s"
    slideWrapper.style.marginLeft = "40px"
    firstScroll.parentNode.removeChild(firstScroll)
    detectScroll()
  }, 1500)
}

function initiateAnimations() {
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
