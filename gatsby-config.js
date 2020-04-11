module.exports = {
  siteMetadata: {
    title: `Kodex, modern websites with a nordic touch`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.kodexcph.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-163310645-1",
      },
    },

    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        // 1 query for each data type
        query: `
          {
            allSanityPost {
              edges {
                node {
                  id
                  slug 
                  publishedAt
                  mainImage {
                    asset {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
          }`,
        mapping: {
          // Each data type can be mapped to a predefined sitemap
          // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
          // The default sitemap - if none is passed - will be pages
          allGhostPost: {
            sitemap: `posts`,
          },
        },
        exclude: [
          `/dev-404-page`,
          `/mail-send`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
          `/my-excluded-page`,
          /(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
        ],
        createLinkInHead: true, // optional: create a link in the `<head>` of your site
        addUncaughtPages: true, // optional: will fill up pages that are not caught by queries and mapping and list them under `sitemap-pages.xml`
        additionalSitemaps: [
          // optional: add additional sitemaps, which are e. g. generated somewhere else, but need to be indexed for this domain
          {
            name: `my-other-posts`,
            url: `/blog/sitemap-posts.xml`,
          },
          {
            url: `https://kodexcph.com/sitemap.xml`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/company-logo.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-sanity`,
      options: {
        apiURL: `http://localhost:3333`,
        projectId: "j7i4hfvy",
        dataset: "production",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merriweather`,
            variants: [
              `300`,
              `300i`,
              `400`,
              `400i`,
              `700`,
              `700i`,
              `900`,
              `900i`,
            ],
          },
          {
            family: `Montserrat`,
            variants: [
              `100`,
              `100i`,
              `200`,
              `200i`,
              `300`,
              `300i`,
              `400`,
              `400i`,
              `500`,
              `500i`,
              `600`,
              `600i`,
              `700`,
              `700i`,
              `800`,
              `800i`,
              `900`,
              `900i`,
            ],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
