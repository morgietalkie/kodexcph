module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  var path = require("path")
  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  // 2. Get json-data

  const res = await graphql(`
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

  res.data.allSanityProjects.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/${edge.node.slug.current}`,
      context: {
        Slug: edge.node.slug.current,
      },
    })
  })

  // 3. Create new pages
}
