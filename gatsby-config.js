module.exports = {
  siteMetadata: {
    title: `Kodex, modern websites with a nordic touch`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-159220266-1",
      },
    },

    `gatsby-plugin-sass`,
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
