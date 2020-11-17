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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.kodexcph.com`,
      },
    },

    {
      resolve: `gatsby-plugin-sitemap`,

      options: {
        output: `/blog/sitemap-post.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        exclude: [`/mail-send/`],

        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage(filter: {path: {regex: "/blog/"}}) {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site }) => {
          //Alternativly, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map((node) => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `always`,
              priority: 1,
            }
          }),
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
        icon: `src/images/company-logo.svg`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-sanity`,
      options: {
        apiURL: `http://localhost:3333`,
        projectId: "j7i4hfvy",
        dataset: "production",
        overlayDrafts: true,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
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
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Merriweather",
            variable: true,
            weights: [
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
            family: "Montserrat",
            variable: true,
            weights: [
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
