module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // BLOG POSTS///////////////////////////
  // BLOG POSTS///////////////////////////
  // BLOG POSTS///////////////////////////

  // 1. Get path to template
  var blogPath = require("path")
  const blogTemplate = blogPath.resolve(`./src/templates/blog.js`)

  // 2. Get json-data

  const blogRes = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  // 3. Create new pages

  blogRes.data.allSanityPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug.current}`,
      context: {
        Slug: edge.node.slug.current,
      },
    })
  })

  // PROJECT POSTS///////////////////////////
  // PROJECT POSTS///////////////////////////
  // PROJECT POSTS///////////////////////////

  // 1. Get path to template
  var projectPath = require("path")
  const projectTemplate = projectPath.resolve(`./src/templates/project.js`)

  // 2. Get json-data

  const projectRes = await graphql(`
    query {
      allSanityProjects {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  // 3. Create new pages

  projectRes.data.allSanityProjects.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/${edge.node.slug.current}`,
      context: {
        Slug: edge.node.slug.current,
      },
    })
  })
}
