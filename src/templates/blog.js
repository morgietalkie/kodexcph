import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import serializers from "../components/serializers"
import Footer from "../components/footer"

export const query = graphql`
  query($Slug: String) {
    sanityPost(slug: { current: { eq: $Slug } }) {
      seo {
        _key
        _type
        focus_keyword
        seo_title
        meta_description
      }
      title
      publishedAt
      author {
        name
        primaryTitle
        corporate_title
        image {
          asset {
            fluid(maxWidth: 200) {
              ...GatsbySanityImageFluid
            }
          }
          hotspot {
            height
            width
            x
            y
          }
        }
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
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    allSanityPost(
      limit: 10
      filter: { slug: { current: { ne: $Slug } } }
      sort: { fields: publishedAt, order: DESC }
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

const BLog = (props) => {
  return (
    <Layout>
      <SEO
        title={props.data.sanityPost.seo.seo_title}
        description={props.data.sanityPost.seo.meta_description}
        image={props.data.sanityPost.mainImage.asset.fluid.src}
      />
      <section id="blogPost">
        <ol>
          {props.data.sanityPost.categories.map(function (category) {
            return (
              <li>
                <p className="post_category">{category}</p> <span>+</span>
              </li>
            )
          })}
        </ol>
        <h1>{props.data.sanityPost.title}</h1>

        <Img
          onLoad={initiateAnimations}
          fluid={props.data.sanityPost.mainImage.asset.fluid}
          alt={props.data.sanityPost.title}
        ></Img>

        <p className="publish_date">
          Published: {props.data.sanityPost.publishedAt}
        </p>

        <div>
          <BlockContent
            className="allBlockContent"
            blocks={props.data.sanityPost._rawBody}
            projectId="j7i4hfvy"
            dataset="production"
            serializers={serializers}
          />
        </div>

        <div className="more_post_wrapper">
          <h2>More Insights</h2>

          <ol className=" more_post animation  animation--fade-up">
            {props.data.allSanityPost.edges.map((edge) => {
              return (
                <Link to={`/blog/${edge.node.slug.current}`}>
                  <li>
                    <Img
                      fluid={edge.node.mainImage.asset.fluid}
                      onLoad={initiateAnimations}
                      alt={edge.node.title}
                    />
                    <h2 className="link_title">{edge.node.title}</h2>
                    <h3>Published at: {edge.node.publishedAt}</h3>
                  </li>
                </Link>
              )
            })}
          </ol>
        </div>
      </section>

      <div className="call_to_action">
        <Img
          onLoad={callToActionLoaded}
          fluid={props.data.sanityPost.author.image.asset.fluid}
          alt={props.data.sanityPost.title}
          imgStyle={{
            objectPosition: `${props.data.sanityPost.author.image.hotspot.x}%  ${props.data.sanityPost.author.image.hotspot.y}%`,
          }}
        ></Img>
        <p className="author">Author</p>
        <p className="author_name"> {props.data.sanityPost.author.name}</p>
        <p className="author_position">
          {props.data.sanityPost.author.primaryTitle}
        </p>

        <button onClick={openMenu} className="getInTouch">
          Contact
        </button>
        <div className="white_box"></div>
      </div>
      <Footer />
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

function openMenu(e) {
  document.querySelector(".menu").classList.toggle("open_menu")
  document.querySelector(".menu").classList.toggle("menu_slide")
}

console.log()

function scrollFunction() {
  window.addEventListener("scroll", scrolled)
}

function scrolled() {
  if (window.innerWidth > 1023) {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.querySelector("header").classList.add("header_background")
    } else {
      document.querySelector("header").classList.remove("header_background")
    }
  }
}

function callToActionLoaded() {
  window.addEventListener("scroll", scrolledToBottom)
}

function scrolledToBottom() {
  if (window.innerWidth > 1024) {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 300
    ) {
      document.querySelector(".call_to_action").style.opacity = "0"
      document.querySelector(".call_to_action").style.pointerEvents = "none"
    } else {
      document.querySelector(".call_to_action").style.opacity = "1"
      document.querySelector(".call_to_action").style.pointerEvents = "auto"
    }
  }
}
