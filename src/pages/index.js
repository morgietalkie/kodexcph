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
      allSanityProjects(sort: { fields: publishedAt, order: DESC }) {
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
        <h2>Modern webistes with a nordic touch</h2>

        <div className="horizontal-scroll-wrapper squares ">
          {data.allSanityProjects.edges.map(function(edge, i) {
            return (
              <Link to={edge.node.slug.current}>
                <div className="scrolls animation  animation--fade-in" key={i}>
                  <Img
                    alt={`Project: ${edge.node.title}`}
                    className="img-hover-effect"
                    key={i}
                    fluid={edge.node.mainImage.asset.fluid}
                    onLoad={initiateAnimations}
                  />
                  <h3 key={i}>{edge.node.title}</h3>
                </div>
              </Link>
            )
          })}

          {/* <div className="getInTouch">
            <p></p>
          </div> */}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

function initiateAnimations() {
  // allChildrenElements.classList.add("animation")
  // allChildrenElements.classList.add("animation--fade-up")

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

function scrollFunctionImage() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    console.log(document.querySelector(".postImage"))

    document.querySelector(".postImage").classList.add("scaledIMG")
  } else {
    document.querySelector(".postImage").classList.remove("scaledIMG")
  }
}
