var plugins = [{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-163310645-1"},
    },{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr'),
      options: {"plugins":[],"siteUrl":"https://www.kodexcph.com"},
    },{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/blog/sitemap-post.xml","exclude":["/mail-send/"],"query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl\n              }\n            }\n            allSitePage(filter: {path: {regex: \"/blog/\"}}) {\n              nodes {\n                path\n              }\n            }\n        }"},
    },{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/company-logo.svg"},
    },{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"apiURL":"http://localhost:3333","projectId":"j7i4hfvy","dataset":"production","overlayDrafts":true,"watchMode":true},
    },{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["Merriweather","Montserrat"],"display":"swap"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
